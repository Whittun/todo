import styled from './aside.module.scss'

const Aside = () => {
    return (
        <aside className={styled.Aside}>
            <ul className={styled.Aside__list}>
                <li className={styled.Aside__item}>
                    <svg className={styled.Aside__itemIco} xmlns="http://www.w3.org/2000/svg" width="17" height="19" viewBox="0 0 17 19" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M9.39895 0H5.685C1.62429 0 0 1.80476 0 6.31667V11.731C0 16.2429 1.62429 18.0476 5.685 18.0476H10.5579C14.6186 18.0476 16.2429 16.2429 16.2429 11.731V6.63395H13.1889C11.9191 6.63395 10.9218 6.42842 10.2631 5.76976C9.60447 5.1111 9.39895 4.11378 9.39895 2.84395V0ZM15.6757 5.68645L10.5579 0H10.3464V2.84395C10.3464 4.06129 10.5554 4.72211 10.9331 5.09977C11.3108 5.47744 11.9716 5.68645 13.1889 5.68645H15.6757Z" fill="#007FFF"/>
                    </svg>
                    <p className={styled.Aside__itemText}>
                        Список задач
                    </p>
                </li>
            </ul>
        </aside>
    )
}

export default Aside