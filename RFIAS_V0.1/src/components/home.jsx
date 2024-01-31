import DefaultCard from "./cards/defaultCard.jsx";

const cardData = [
    {
        count: '34',
        title: 'Total Employee'
    },
    {
        count: '23',
        title: 'On Time'
    },
    {
        count: '06',
        title: 'Late'
    },
    {
        count: '05',
        title: 'Absent'
    }
]


function Home() {
    return (
        <>

            <div className="container">
                <div className="row">
                    {
                        cardData.map((data, index) => {
                            return (
                                <DefaultCard count={data.count} title={data.title} key={index + 1}/>
                            );
                        })
                    }
                </div>
            </div>

        </>
    );
}

export default Home;