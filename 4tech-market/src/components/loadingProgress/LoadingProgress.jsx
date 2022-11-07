import { CircularProgress } from "@mui/material";
import "./LoadingProgress.scss";


export default function LoadingProgress({ children, loadingStatus }) {

    if (loadingStatus) {
        return (
            <div className="loadingProgress">
                <CircularProgress size={80} thickness={7.2} color={"secondary"} />
            </div>
        )
    } else {
        return children
    }
}
