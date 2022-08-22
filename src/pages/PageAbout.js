import React from "react";

function PageAbout() {
    return(
        <div style={{textAlign: 'justify'}}>
            <section>
                <h2>👋 Halo!</h2>
                <p>Perkenalkan, nama saya Rachmad Nur Hayat. Saya senang teknologi 😎 terutama mengeksplor hal baru. <b>Web Development</b> adalah keahlian saya, dan Sekarang saya sedang belajar <b>Teknologi Cloud</b>.</p>

                <p>Untuk pendidikan formal, Alhamdulillah saya saat ini sedang menjadi mahasiswa dari salah satu <a href="https://binainsani.ac.id">universitas</a> di Bekasi 👨‍🎓, saya memiliki pekerjaan sampingan yaitu bekerja untuk kakak tingkat saya membantu mengerjakan aplikasi web 💻. Saya juga seorang kurir antar troli yang usahanya dijalankan oleh ayah saya dengan pengalaman jarak tempuh terjauh dari Bekasi hingga Bandung dengan menggunakan motor dan tentunya sendirian 🛵</p>

                <p>Saya senang bermain game 🎮, terutama game FPS seperti CSGO dan Valorant, saya juga senang main DOTA 2 yang MMR nya tidak tinggi-tinggi banget 😁. Soal olahraga, saya senang main basket 🏀, bahkan untuk urusan makanan, Indomie Goreng adalah favorit saya 🍝.</p>	
            </section>
            <section>
                <h3>Keahlian</h3>
                <ul className="fa-ul">
                    <li style={{marginTop: '1rem'}}>
                        <span className="fa-li"><i className="fa fa-chevron-right"></i></span><p>Front End</p>
                        <div>
                            <img alt="Bisa HTML5" src="https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white"/>
                            <img alt="Bisa CSS" src="https://img.shields.io/badge/-CSS-1572B6?style=flat-square&logo=css3&logoColor=white"/>
                            <img alt="Bisa Javascript" src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=white"/>
                            <img alt="Bisa Bootstrap" src="https://img.shields.io/badge/-Bootstrap-7952B3?style=flat-square&logo=bootstrap&logoColor=white"/>
                        </div>
                    </li>
                    <li style={{marginTop: '1rem'}}>
                        <span className="fa-li"><i className="fa fa-chevron-right"></i></span><p>Back End</p>
                        <div>
                            <img alt="Bisa Dot NET" src="https://img.shields.io/badge/-dot NET-1384C8?style=flat-square&logo=dotnet&logoColor=white"/>
                            <img alt="Bisa PHP" src="https://img.shields.io/badge/-php-6181B6?style=flat-square&logo=php&logoColor=white"/>
                            <img alt="Bisa Codeigniter" src="https://img.shields.io/badge/-Codeigniter-EE4323?style=flat-square&logo=codeigniter&logoColor=white"/>
                            <img alt="Bisa MySQL" src="https://img.shields.io/badge/-MySQL-00618A?style=flat-square&logo=mysql&logoColor=white"/>
                            <img alt="Bisa SQL Server" src="https://img.shields.io/badge/-SQL Server-CC2927?style=flat-square&logo=microsoftsqlserver&logoColor=white"/>

                        </div>
                    </li>
                    <li style={{marginTop: '1rem'}}><span className="fa-li"><i className="fa fa-chevron-right"></i></span><p>Tools</p>
                        <div>
                            <img alt="Bisa Node JS" src="https://img.shields.io/badge/-NodeJS-83CD29?style=flat-square&logo=nodedotjs&logoColor=white"/>
                            <img alt="Bisa Visual Studio" src="https://img.shields.io/badge/-Visual Studio-5C2D91?style=flat-square&logo=visualstudio&logoColor=white"/>
                            <img alt="Bisa VS Code" src="https://img.shields.io/badge/-Visual Studio Code-007ACC?style=flat-square&logo=visualstudiocode&logoColor=white"/>
                            <img alt="Bisa Bash" src="https://img.shields.io/badge/-Bash-4EAA25?style=flat-square&logo=bash&logoColor=white"/>
                            <img alt="Bisa Photoshop" src="https://img.shields.io/badge/-Photoshop-31A8FF?style=flat-square&logo=adobephotoshop&logoColor=white"/>
                            <img alt="Bisa Adobe Illustrator" src="https://img.shields.io/badge/-Illustrator-FF9A00?style=flat-square&logo=adobeillustrator&logoColor=white"/>
                            <img alt="Bisa AWS" src="https://img.shields.io/badge/-AWS-232F3E?style=flat-square&logo=amazonaws&logoColor=white"/>
                            <img alt="Bisa Git" src="https://img.shields.io/badge/-git-181717?style=flat-square&logo=github&logoColor=white"/>
                            <img alt="Bisa banget Figma" src="https://img.shields.io/badge/-Figma-F24E1E?style=flat-square&logo=figma&logoColor=white"/>

                        </div>
                    </li>
                </ul>
            </section>
            <section>
                <a className="btn btn-sm btn-primary" target="_blank" rel="noopener noreferrer" href="./cv_rachmad_nur_hayat.pdf">Unduh CV</a>
            </section>

        </div>
    )
}

export default PageAbout;