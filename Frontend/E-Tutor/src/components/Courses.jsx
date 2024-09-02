import coursesData from "../data/course"

const Courses = () => {

  return (
    <div className="pt-2 container mx-auto">
        <h1 className="text-center text-3xl font-semibold pt-10">Browse top category</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-10 gap-5 mt-7 mb-[70px]">
          {
            coursesData.map((course,index) => (
              <div key={index} style={{ background:course.bg }} className="flex w-[342px] h-[104px] px-5 items-center shadow-lg rounded-sm cursor-pointer">
                <div>
                  <img src={course.logo} alt="" className=""/>
                </div>
                <div className="pl-5">
                  <h4>{course.name}</h4>
                  <p className="text-gray-500 text-[12px] mt-1">{course.noOfCourse} Courses</p>
                </div>
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default Courses