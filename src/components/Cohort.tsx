
const Cohort = () => {
    return (
        <section id="cohorts" className="flex flex-col  w-full my-5" >
            <h1 className="text-xl font-semibold mb-5" >DSA <span className=" text-accent underline underline-offset-2 " >Cohort</span></h1>

            <div className="py-5 w-full " >
                <div className="flex flex-col p-2 rounded-lg bg-hover-bg" >
                    <img className="w-full rounded-md" src="/batch2.jpg" alt="" />
                    <img className="w-full mb-2 rounded-md" src="/batch1.jpg" alt="" />
                    <p className="text-xs p-2 mb-2 tracking-wide" >During my second year, conducted multiple offline cohorts,   teaching DSA and C++ to nearly 100 students, including juniors, batchmates, and some seniors.</p>
                </div>
            </div>

        </section>
    )
}

export default Cohort