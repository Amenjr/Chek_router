
import CarS from './Card_serie';



function Serie({Series,setSeries,search,searchRate}){
    
    return(
        
            
            
            <div className="type">
        {
            Series.filter((el,key) => el.name.toUpperCase().includes(search.toUpperCase().trim()) && el.rate>=searchRate).map((el,key)=><div className="type2"><CarS el={el} Series={Series} key={el.id}  setSeries={setSeries} searchRate={searchRate}/></div>)
        }
            </div>
            
        

    );
}
export default Serie;