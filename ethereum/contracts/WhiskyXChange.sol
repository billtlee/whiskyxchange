pragma solidity ^0.4.23;


contract Sellable {
    
    // The owner of the contract
    address public owner;
    
    // Current sale status
    bool public selling = false;
    
    // Who is the selected buyer, if any.
    // Optional
    address public sellingTo;
    
    // How much ether (wei) the seller has asked the buyer to send
    uint public askingPrice;
    
    //
    // Modifiers
    // 
    
    // Makes functions require the called to be the owner of the contract
    modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }
    
    // Add to functions that the owner wants to prevent being called while the
    // contract is for sale.
    modifier ifNotLocked {
        require(!selling);
        _;
    }
    
    event Transfer(uint _saleDate, address _from, address _to, uint _salePrice);

    constructor (address _owner) public{
        owner = _owner;
        emit Transfer(now,address(0),owner,0);
    }
    
    /**
     * @dev initiateSale is called by the owner of the contract to start
     * the sale process.
     * @param _price is the asking price for the sale
     * @param _to (OPTIONAL) is the address of the person that the owner
     * wants to sell the contract to. If set to 0x0, anyone can buy it.
     */
    function initiateSale(uint _price, address _to) onlyOwner public{
        require(_to != address(this) && _to != owner);
        require(!selling);
        
        selling = true;
        
        // Set the target buyer, if specified.
        sellingTo = _to;
        
        askingPrice = _price;
    }
    
    /**
     * @dev cancelSale allows the owner to cancel the sale before someone buys
     * the contract.
     */
    function cancelSale() onlyOwner public{
        require(selling);
        
        // Reset sale variables
        resetSale();
    }
    
    /** 
     * @dev completeSale is called buy the specified buyer (or anyone if sellingTo)
     * was not set, to make the purchase.
     * Value sent must match the asking price.
     */
    function completeSale() public payable{
        require(selling);
        require(msg.sender != owner);
        require(msg.sender == sellingTo || sellingTo == address(0));
        require(msg.value == askingPrice);
        
        // Swap ownership
        address prevOwner = owner;
        address newOwner = msg.sender;
        uint salePrice = askingPrice;
        
        owner = newOwner;
        
        // Transaction cleanup
        resetSale();
        
        prevOwner.transfer(salePrice);
        
        emit Transfer(now,prevOwner,newOwner,salePrice);
    }
    
    //
    // Internal functions
    //
    
    /**
     * @dev resets the variables related to a sale process
     */
    function resetSale() internal{
        selling = false;
        sellingTo = address(0);
        askingPrice = 0;
    }
}


contract WhiskyXChange {
    address[] public registeredAssets;
    mapping(bytes32 => address) public assetAddressMap;

    function registerAsset(bytes32 assetKey, uint value) public {
        address newWhiskyAsset = new WhiskyAsset(assetKey, value, msg.sender);
        registeredAssets.push(newWhiskyAsset);
        assetAddressMap[assetKey] = newWhiskyAsset;
    }

    function getRegisteredAssets() public view returns (address[]) {
        return registeredAssets;
    }

    function getAssetAddress(bytes32 assetKey) public view returns (address) {
        return assetAddressMap[assetKey];
    }
}


contract WhiskyAsset is Sellable{

    bytes32 public assetKey;
    uint public value = 0;

    constructor (bytes32 _assetKey, uint _value, address _owner) Sellable(_owner) public {
        assetKey = _assetKey;
        value = _value;
    } 

    function initiateSale() public onlyOwner {
        super.initiateSale(value, address(0));
    }

    function buyWhisky() public payable {
        require(msg.value == value);
        super.completeSale();
    }
}