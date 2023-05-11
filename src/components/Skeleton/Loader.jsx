import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Loader = () =>{
    return(
        <div>
            <Skeleton width={365} height={285}></Skeleton>
            <Skeleton width={365} height={24} ></Skeleton>
        </div>
    )
}
export default Loader;