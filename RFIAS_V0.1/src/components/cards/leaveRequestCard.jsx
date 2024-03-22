import {Button} from "@mui/material";

function LeaveRequestCard(props) {

    const {userName, message} = props;

    return (
        <>
            <div className="card lvReqCard mb-3">
                <div className="row g-0">
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-text">{userName}</h5>
                            <p className="card-text"><small className="text-body-secondary">{message}</small></p>
                            <Button className='exploreBtn' variant="contained" size="small">Explore </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LeaveRequestCard;