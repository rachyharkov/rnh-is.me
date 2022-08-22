import React from "react";

function PageTimeline() {
    return(
        <div style={{display: 'flex'}}>
            <ul className="timeline-ul">
                <li className="animated fadeInDown">
                    <div>
                        1998
                        <article style={{marginLeft: 'auto',paddingBottom: '2em',textAlign: 'right'}}>🐣 Lahir</article>
                    </div>

                </li>
                <li className="animated fadeInDown">
                    <div>
                        2017
                        <article style={{marginLeft: 'auto',paddingBottom: '2em',textAlign: 'right'}}>📚 Sekolah Menengah Kejuruan<br/>Bina Karya Mandiri 1, Bekasi</article>
                    </div>
                </li>
                <li className="animated fadeInDown">
                    <div>
                        2017
                        <article style={{marginLeft: 'auto',paddingBottom: '2em',textAlign: 'right'}}>💼 Fiber Optic Technician<br/>PT. Quantum Nusatama, Jakarta</article>
                    </div>
                </li>
                <li className="animated fadeInDown">
                    <div>
                        2021
                        <article style={{marginLeft: 'auto',paddingBottom: '2em',textAlign: 'right'}}>💼 Junior Officer IT Business<br/>PT. Rekayasa Industri, Jakarta</article>
                    </div>
                </li>
                <li className="animated fadeInDown">
                    <div>
                        2022
                        <article style={{marginLeft: 'auto',paddingBottom: '2em',textAlign: 'right'}}>💼 Learning Development Officer<br/>PT. Pupuk Indonesia (Holding Company), Jakarta</article>
                    </div>
                </li>
                <li className="animated fadeInDown">
                    <div>
                        Sekarang
                        <article style={{marginLeft: 'auto',paddingBottom: '2em',textAlign: 'right'}}>🎓 S1 Teknik Informatika<br/>Universitas Bina Insani, Bekasi</article>
                    </div>
                </li>
                
            </ul>
        </div>
    )
}

export default PageTimeline;