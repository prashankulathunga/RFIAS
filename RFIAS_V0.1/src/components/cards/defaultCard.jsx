function DefaultCard(props) {

    const {count, title} = props;

    return (
        <>

            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card defaultCard mb-3">
                    <div className="row g-0">
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{count}</h5>
                                <p className="card-text">{title}</p>
                                <p className="card-text"><small className="text-body-secondary">Last updated 3 mins
                                    ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default DefaultCard;