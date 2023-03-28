import SearchResults from "../SearchResults"

function CategoryIndex({category}){
    debugger
    return (
        <div>
            <div className="category-header">
                <h3>FEATURED CATEGORY</h3>
                <h1>{category}</h1>
            </div>
            <SearchResults category={category}/>
        </div>
    )
}

export default CategoryIndex