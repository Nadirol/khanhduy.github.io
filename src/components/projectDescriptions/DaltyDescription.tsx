const DaltyDescription = (): JSX.Element => (
    <div className="">
        <p className="text-accent-light-light dark:text-neutral-50 font-exo-2 font-normal text-2xl mb-9">
            Dalty is an application where users can quickly discover new destinations based on street/city name,
             radius or categories and view the details of each destination. 
        </p>
        <ul className="list-disc list-inside text-accent-light-light dark:text-neutral-50 font-exo-2 font-normal text-xl">
            <li>JSX and Tailwind was used to display every element/component as close to design as possible.</li>
            <li>React was used with multiple hooks to make interactions on buttons, search bars, sliders working correctly.</li>
            <li>React Router was used to create routing when navigating to different pages.</li>
            <li>React Query and Axious was used to get data from OpenTripMap API and Pexels API.</li>
        </ul>
    </div>
)

export default DaltyDescription;