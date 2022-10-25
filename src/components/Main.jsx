function Main(props) {
    console.log(props.id);

  return (
    <div className=" mt-0 mr-4 ml-4  ">
        <div className="flex max-w-[470 px] mt-10 ml-10 mr-10 bg-white">
            <div>
               <img className="max-w-[200px] h-60 rounded-md" src={props.imageUrl} alt="/"/>
            </div>
            <div className=" flex items-center justify-center ml-7">
               <section>
                 <div className="flex">
                     <h1 className="mr-1 w-10 h-2.5 text-[10.24px] font-normal leading-3 tracking-tighter text-[#2B283A]">{props.location}</h1>
                     <a  className="font-normal text-[10px] ml-4 leading-3 not-italic underline text-[#918E9B]" href="http://">View google maps</a>
                 </div>
                 <h1 className="h-10 font-bold text-2xl text-gray-700 leading-8">{props.title}</h1>
                 <p className="not-italic text-[10.27px] leading-3 font-bold text-[#918e9B]">{props.startDate}-{props.endDate}</p>
                 <article className="not-italic font-normal text-[12.24px] leading-6 w-[326px]">{props.description}</article>
              </section>
            </div>
        </div>
        
    </div>
  )
}

export default Main