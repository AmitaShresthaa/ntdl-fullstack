/* eslint-disable react/prop-types */
const TimeCalculator = (props) => {

    const { entryTime, unwantedTime  } = props
    const totalTimeInDay = "24"
     return(
       <>
        <div className="row gap-2 mt-4">
            {/* <!--First Column--> */}
            <div className="col border fw-bold alert alert-primary">Total Time in a Day: <span>{totalTimeInDay} hrs</span></div>
            {/* <!--Second Column--> */}
            <div className="col border fw-bold alert alert-success">Total Time Spent: {entryTime} <span></span></div>
            {/* <!--Third Column--> */}
            <div className="col border fw-bold alert alert-danger">Total time wasted: {unwantedTime} <span></span></div>
          </div>
    
       </>
    )

}

export default TimeCalculator 