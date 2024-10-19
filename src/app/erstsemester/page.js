import styles from "./../page.module.css"

export default function() {
    return(
        <>
            <h1 className={styles.BigHeading}>Hallo, liebe Erstsemester!</h1>
            <h2 className={styles.SmallHeading}>Einstig ins Studium</h2>
            <div className={styles.Textblock}>
                Als Fachschaft möchten wir euch bei eurem Einstieg in das Studierenden-Leben begleiten.
                Dafür bieten wir euch eine <a href="/erstiwoche">Ersti-Woche</a> (manchmal auch O-Woche genannt)
                vor der ersten Vorlesungswoche und ein <a href="/erstiwochenende">Ersti-Wochenende</a> an.
                Wir würden uns sehr freuen, viele von euch dort zu treffen :-).
            </div>
            <div className="Textblock">
                Wir haben für euch eine Ersti-Info erstellt. Diese könnt ihr euch <a href="/survival.pdf">hier</a> herunterladen.
            </div>
            <h2 className={styles.SmallHeading}>Stundenplan</h2>
            <em >Beachtet auch die weiteren Hinweise unter dem Stundenplan: Es kommt noch mehr dazu!</em>
            <Stundenplan />
            <div className={styles.Textblock}>
                Zu den Mathe- und Informatik-Vorlesungen kommen noch <em className={styles.bold}>Übungstermine</em> hinzu.
                Für Mathe sind die möglichen Termine meist dienstags, mittwochs und donnerstags (Infos)
                für Info donnerstags und freitags (Infos). Die Organisation dazu, welchen Termin ihr bekommt,
                findet in der ersten Vorlesungswoche statt, also unbedingt zur ersten Vorlesung hingehen!
            </div>
            <div className={styles.Textblock}>
                Bei der <em className={styles.bold}>Übung</em> für EGI (Einführung in die Geoinformatik) findet kein Tutorium statt wie bei Mathe und Info,
                sondern es ist mehr eine Fragestunde, die ihr wahrnehmen könnt wenn ihr möchtet – also nicht erschrecken,
                dass sie mit vier Stunden im Stundenplan steht.
            </div>
            <div className={styles.Textblock}>
                Plant außerdem ein, dass in Mathe und Info <em className={styles.bold}>wöchentliche-</em> und in EGI alle <em className={styles.bold}>zwei Wochen</em> Abgaben zu machen sind,
                die einiges an Zeit beanspruchen.
            </div>
            <div className={styles.Textblock}>
                Zudem gibt es voraussichtlich einen <em className={styles.bold}>Mathe-Ergänzungskurs</em>. Dieser ist quasi ein Nachhilfe-Kurs,
                der von unserem Institut extra angeboten wird, da Mathe im ersten Semester oft als der schwierigste Kurs wahrgenommen wird.
                Die Teilnahme ist also optional, aber höchstwahrscheinlich werdet ihr dort sehr gerne hingehen…
            </div>
            <div className={styles.Textblock}>
                Habt ihr auch vor dem Semester schon ein wenig Zeit und wollt eure <em className={styles.bold}>Mathe-Kenntnisse</em> auffrischen, könnt ihr einen Mathe-Vorkurs besuchen.
                In der Regel gibt es einen Vorkurs für Anwender (Wiederholung des Schulstoffes) und einen „richtigen“ Mathevorkurs (vom späteren Dozenten
                mit vorlesungsrelevanten Inhalten, also „Uni-Mathe“) . Ihr könnte selber entscheiden, ob und welchen Kurs ihr besuchen wollt.
                Hier findet ihr weitere Infos dazu.
            </div>
            <h2 className={styles.SmallHeading}>Weitere Hinweise</h2>
            <ul>
                <li>
                    <a href="/links">Nützliche Links</a>, die euch gerade am Anfang des Studiums weiterhelfen
                </li>
                <li>
                    Habt ihr weitere Fragen? Dann schaut doch auch mal in unseren <a href="faq">FAQ</a> vorbei
                </li>
                <li>
                    Als Studierende an der Uni Münster seid ihr verpflichtet eure <a href="https://uni-muenster.de/permail">Uni-Emails </a> 
                    regelmäßig abzurufen, da euch dort wichtige Informationen erreichen
                </li>
                <li>
                    Das IfGI (institut für Geoinformatik) nutzt außerdem <a href="https://mattermost.uni-muenster.de/login">Mattermost </a>
                    als offiziellen Kommunikaitonskanal.
                </li>
                <li>
                    Informationen zu Fristen und Terminen (zum Beispiel zu Semesterferien) an der Uni Müsnter erhaltet ihr
                    <a href="https://www.uni-muenster.de/studium/orga/termine.html"> hier</a>
                </li>
            </ul>
        </>
    )
}

function Stundenplan() {
    return(
        <>
            <table>
                <thead>
                    <tr>
                        <td>Zeit</td>
                        <td>Montag</td>
                        <td>Dienstag</td>
                    </tr>
                </thead>
            </table>
        </>
    )
}