const YouTube = () => {

    return (
        <section id="yt" className="flex flex-col  w-full mt-5" >
            <h1 className="text-xl font-semibold" >I'm also on <span className=" text-accent underline underline-offset-2 " >YouTube</span></h1>

            <span className="mt-10 mb-7 text-sm" >Here are my top favorite and most cherished videos on YouTube.
            </span>
            <iframe
                width="100%" className="mb-2"
                src={`https://www.youtube.com/embed/qNIW75-AuII?si=xQ_azhCMuJ_QqlJM`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded YouTube"
            />
            <iframe
                width="100%"
                className="mb-2"
                src={`https://www.youtube.com/embed/3weEJPDOjLQ?si=RrIjEv1GDgPGIw0y`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded YouTube"
            />
            <iframe
                width="100%"
                className="youtube-video"
                src={`https://www.youtube.com/embed/600IBRpUbes?si=ZwGWJqGqr1gWf79C`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded YouTube"
            />



            <span className="mt-10 mb-7 text-sm" >Sometimes, I also enjoy recording videos while doing my favorite Work.
            </span>

            <iframe width="100%" className="mb-2" src={`https://www.youtube.com/embed/_o8ePFZZ34U?si=dTCyT54Zd_q5qYa2`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded YouTube"></iframe>

            <span className="mt-10 mb-7 text-sm" >I remember starting a JavaScript playlist on YouTube, but I never finished it, lol 😭
            </span>

            <iframe width="100%" className="mb-2" src="https://www.youtube.com/embed/coI553p1Gps?si=TPK_jWF6HPXW1gVi" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded YouTube"></iframe>

            <div className="mt-16 h-20 "  >
                <p className="text-sm" >Looks like you reached the end. <a className="text-accent underline underline-offset-2 font-semibold" href="/SHIVAM_PURI_RESUME.pdf" download>Click Here</a> if you want to watch/download my resume :)</p>
            </div>

        </section>
    )
}

export default YouTube