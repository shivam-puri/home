const Experience = () => {
    return (
        <section id="exp" className="flex flex-col  w-full my-5" >
            <h1 className="text-xl font-semibold" >Positions & <span className=" text-accent underline underline-offset-2 " >Internships</span></h1>

            <div className="py-5 w-full " >
                <div className="mb-2 rounded-md flex flex-col w-full p-4">
                    <h1 className="flex w-full tracking-wide mb-2">
                        <span>Software Developer Intern at Walkover</span>
                    </h1>
                    <span className="text-xs text-fade-foreground" >June 2024 - Present</span>
                </div>


                <div className="mb-2 rounded-md flex flex-col w-full p-4 ">
                    <h1 className="flex w-full tracking-wide mb-2">
                        <span>Front end Developer  at Qureal Tech pvt ltd</span>
                    </h1>

                    <span className="text-xs text-fade-foreground" >Jan 2023 - March 2023</span>


                    <ul className="text-xs mt-5 list-disc pl-5">
                        <li className="leading-5">Created frontend and backend of a healthcare application with key features like online doctor consultation slots
                            booking, online doctor meetings, calendar management etc..</li>
                        <li className="leading-5">Designed multiple API’s for extracting modifying data like slots and medicines from the backend (directus).</li>
                        <li className="leading-5">Designed reusable components to optimize code efficiency and maintainability within the application.
                        </li>
                        <li className="leading-5">Implemented microfrontends to improve scalability and development agility.</li>
                        <li className="leading-5">The application featured distinct interfaces for doctors, receptionists, and patients, each tailored with specific
                            role-based authority and permissions.</li>
                    </ul>
                </div>

                <div className="mb-2 rounded-md flex flex-col w-full p-4 ">
                    <h1 className="flex w-full tracking-wide mb-2">
                        <span>Technical Executive</span>
                    </h1>

                    <span className="text-xs text-fade-foreground" >Oct 2022 - Present</span>

                    <ul className="text-xs mt-5 list-disc pl-5">
                        <li className="leading-5">Technical Executive at Medi-Caps University ACM Student Chapter</li>
                    </ul>
                </div>


            </div>
        </section>
    )
}

export default Experience