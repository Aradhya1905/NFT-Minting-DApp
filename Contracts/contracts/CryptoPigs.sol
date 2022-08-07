// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
import "../node_modules/@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";

contract CryptoPigs is ERC721Enumerable, Ownable {
  using Strings for uint256;
  uint256 public maxNFT = 500;
  uint256 public maxMintAmount = 10;
  uint256[] private _tokenIDs;
  constructor() ERC721("Project pigs", "PPGs") {}

  // Mint function public.
  ///@dev instead of _tokenIDs[].length method, inbuilt totalSupply() function can be used to increment tokenIDs.
  function mint(uint256 _mintAmt) public {
    require(_mintAmt <= maxMintAmount,"cannot exceed maxMintAmount");
	require(_mintAmt + maxMintAmount <= maxNFT,"cannot exceed maxNFT");
    require(msg.sender != address(0));
    require(_mintAmt > 0);
    for(uint256 i=1; i <= _mintAmt; i++){
      _tokenIDs.push(i);
      _safeMint(msg.sender, _tokenIDs.length);
    }      
  }

  function tokenURI(uint256 tokenId) public view virtual override returns (string memory){
    require(_exists(tokenId),"Token Id does not exist");
    return string(abi.encodePacked("ipfs://bafybeiey5cby6jtb4kuuywmpbopkegyo4d23bnbujqxpaf4psaps7yjtym/",tokenId.toString(),".json"));
    
  }


  function AmountOfNFTminted() public view returns(uint256){
    return _tokenIDs.length;
  }

  function AmountOfNFTtoMint() public view returns(uint256){ 
	return maxNFT - _tokenIDs.length;
  }

}
