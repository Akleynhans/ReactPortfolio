// resume link
const url = "https://resume.io/r/WvlStUmCj";



export default function Resume() {
    return (
        <div>
            <h1 className="pageTitle" id="border" >Resume</h1>
            <div id="border">

                <h2 className="pageTitle">Proficiencies</h2>
                <div class="row">


                    <div class="col-sm">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Node</li>
                    </div>

                    <div class="col-sm">
                    <li>Express</li>
                    <li>MySQL</li>
                    <li>inquirer</li>
                    </div>

                    <div class="col-sm">
                    <li>Git</li>
                    <li>GitHub</li>
                    <li>Sequilize</li>
                    </div>

            

                </div>
            </div>
            {/* link to resume */}
            <div id="border" >

            <a href={url} className="pageTitle" > Click to Open Resume </a>
            </div>

        </div>
    )
}