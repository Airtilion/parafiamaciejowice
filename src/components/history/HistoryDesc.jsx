import React from 'react'
import historyImg from '../../assets/media/images/history/history.webp'

const HistoryDesc = () => {
    return (
        <section className='mb-[64px] w-[1240px] mx-auto max-xl:w-[1000px] max-lg:w-[90%]'>
            <article className='flex gap-[64px] max-md:flex-col'>
                <div className='w-[750px] space-y-[16px] text-[18px] font-light max-sm:text-[16px] max-lg:w-full'>
                    <p>Dzieje parafii maciejowickiej są bardzo złożone. Jan Długosz pisał, że Kazimierz Sprawiedliwy dał przywilej na założenie w Kochowie miasta, dlatego też, już w XII wieku znajdował się tu miejscowy kościół. Kochów wówczas odgrywał najważniejszą rolę na ziemi maciejowickiej należącej do Kanoników Regularnych z Czerwińska, którzy sprawowali tu posługi religijne, dopiero od 1540 r. księża diecezjalni objęli na stałe parafię. W 1681 r. po spaleniu kościoła w Kochowie, właścicielka miejscowych dóbr, Anna z Oleśnickich Zbąska wybudowała drewniany kościół w Ostrowie - Maciejowicach. Obecny murowany kościół parafialny w Maciejowicach pod wezwaniem Wniebowzięcia NMP, został zbudowany w latach 1772 - 1780, z funduszów zostawionych przez ks. Józefa Bryndzyńskiego, właścicielem tutejszych dóbr był wówczas Ignacy Potocki. Po pożarze i zniszczeniach Maciejowic w 1819 roku budowa została dokończona przez XII Ordynata Stanisława Kostkę Zamoyskiego w 1821 roku. Obecny kształt i neogotyckie cechy stylowe uzyskał w latach 1880 - 1881, kiedy to został gruntownie przebudowany według projektu Leonarda Marconiego. Wyobrażenie o jego wcześniejszym wyglądzie może dać zabytkowa przykościelna dzwonnica, zbudowana w roku 1821., która doskonałe proporcje i cechy budowli klasycystycznej. Podczas niezwykle zaciętych walk w 1915 roku Świątynia uległa częściowemu zniszczeniu. W 1939 roku kościół został konsekrowany przez biskupa pomocniczego siedleckiego Czesława Sokołowskiego. W świątyni jest umieszczony obraz Najświętszej Matki Bolesnej Nieustającej Pomocy namalowany w Rzymie. i ofiarowany przez hrabinę Celinę Zamoyską. W kościele można zobaczyć także tablice pośmiertne hrabiego Stanisława Kostki Zamoyskiego oraz hrabiny Róży z Potockich Zamoyskich.</p>
                    <p>Do zespołu kościelnego należy Grobowiec Zamoyskich położony na tyłach świątyni, zbudowany w 1908 r. według projektu Ksawerego Makowskiego. Ta oryginalna budowla z granitu budzi podziw maestrią kamieniarskiego cyzelunku wykonanego pod kierunkiem Kazimierza S. Dutkiewicza. Szczególny podziw wywołują, doskonałe płaskorzeźby herbowe, starannie wycyzelowane w twardym granicie, z którego cały grobowiec jest zbudowany. We wnętrzu nisze grobowe, zajęte tylko w niewielkiej części. Grobowiec przed kilku laty został starannie wyremontowany staraniem  proboszcza maciejowickiego ks. Romualda Michalczyka.</p>
                </div>
                <div className='w-[420px] max-lg:w-full max-lg:flex max-lg:justify-center'>
                    <img src={historyImg} alt="Zdjęcie przedstawiające kościół" width="420" height="540" loading='lazy' className='object-cover'/>
                </div>
            </article>
        </section>
    )
}

export default HistoryDesc