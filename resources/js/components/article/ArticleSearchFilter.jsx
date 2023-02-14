const ArticleSearchFilter = ({filter, setFilter}) => {
    return ( 
        <>
            <select value={filter} onChange={e => setFilter(e.target.value)} required name='filter'
                class="form-select bg-transparent border border-secondary" id="inputGroupSelect02" style={{ maxWidth: 80 }}>
                <option value='' selected hidden>Filter</option>
                <option value='all'>All</option>
                <option value="1">In Review</option>
                <option value="2">Published</option>
                <option value="3">Unpublished</option>
                <option value="4">Needs Attention</option>
            </select>
        </>
     );
}
 
export default ArticleSearchFilter;