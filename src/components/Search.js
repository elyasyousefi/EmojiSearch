import React ,{useState}from "react";
import Imoji from '../emoji.json'

const Search = () =>{
    const [inputkey ,setInputkey] = useState('');
    if (inputkey===''){
        setInputkey(null)
    }

    const handleSearchkeywords = (e)=>{
        setInputkey(e.target.value);
    }

    const filtered = Imoji.filter(obj => {
        return obj.keywords.match(new RegExp(inputkey, "i")) 

      });
return(
    <div className="searchBox">
        <fieldset>
            <span> Type Your Keyword To Find Emoji </span>
            <input type='search' onChange={handleSearchkeywords} placeholder="Keyword of Emoji"/>
        </fieldset>
        <div className="searchResults">
        <ol>
        {filtered.map((obj,index) => {
            return (
                <div key={index}>
                 <li > <span className="imojiTitle">{obj.title} </span> <span className="imojisymbol">{obj.symbol} </span>  </li>
                 <hr/>
                </div>
            )
          })}
      </ol>
        </div>
    </div>
)

}


export default Search