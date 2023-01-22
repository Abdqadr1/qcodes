
import Pagination from 'react-bootstrap/Pagination';
const Pages = ({
    links, from, perPage, total, lastPage, to,
    firstPageUrl, lastPageUrl, prevPageUrl, nextPageUrl, currentPage,
    mutation, keyword
}) => { 

    const isFirst = currentPage === 1;
    const isLast = currentPage === lastPage;
    const len = links.length;
    
    
    return ( 
        <div className='d-flex justify-content-center mt-3 flex-column'>
            <p className='text-center'>Showing { from } to { to } of { total }</p>


            <Pagination className='d-flex justify-content-center align-items-center'>
                <Pagination.First disabled={isFirst} onClick={()=> mutation.mutate(firstPageUrl)} />
                <Pagination.Prev disabled={isFirst} onClick={()=> mutation.mutate(prevPageUrl)} />
                    {
                    links.map((link, i) => {
                         if (i == 0 || i == len - 1) return ""
                        return <Pagination.Item
                                onClick={()=> mutation.mutate(link.url)}
                                disabled={link.url === null} key={link.label} 
                                active={link.active}>{link.label}
                            </Pagination.Item>
                        })
                    }
                <Pagination.Next  disabled={isLast} onClick={()=> mutation.mutate(nextPageUrl)} />
                <Pagination.Last  disabled={isLast} onClick={()=> mutation.mutate(lastPageUrl)} />
            </Pagination>
        </div>
     );
}
 
export default Pages;