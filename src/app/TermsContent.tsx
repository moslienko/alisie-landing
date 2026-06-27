'use client'
import PageBody from '../components/PageBody/PageBody'
import { LocaleProvider } from '../i18n/LocaleContext'
import type { Locale } from '../i18n/locale'
import { ui } from '../i18n/ui'

const CONTACT_EMAIL = 'alisieapp@proton.me'

function EnglishBody() {
    return (
        <>
            <p>
                By downloading or using the app, these terms will automatically apply to
                you – you should make sure therefore that you read them carefully before
                using the app. You’re not allowed to copy, or modify the app, any part of
                the app, or our trademarks in any way. You’re not allowed to attempt to
                extract the source code of the app, and you also shouldn’t try to
                translate the app into other languages, or make derivative versions. The
                app itself, and all the trade marks, copyright, database rights and other
                intellectual property rights related to it, still belong to the developer.
            </p>
            <p>
                The developer is committed to ensuring that the app is as useful and
                efficient as possible. For that reason, we reserve the right to make
                changes to the app or to charge for its services, at any time and for any
                reason. We will never charge you for the app or its services without
                making it very clear to you exactly what you’re paying for.
            </p>
            <p>
                The «Alisie» app stores and processes personal data that you have
                provided to us, in order to provide my Service. It’s your responsibility
                to keep your phone and access to the app secure. We therefore recommend
                that you do not jailbreak or root your phone, which is the process of
                removing software restrictions and limitations imposed by the official
                operating system of your device. It could make your phone vulnerable to
                malware/viruses/malicious programs, compromise your phone’s security
                features and it could mean that the «Alisie» app won’t work properly or
                at all.
            </p>
            <p>
                You should be aware that there are certain things that the developer will
                not take responsibility for. Certain functions of the app will require
                the app to have an active internet connection. The connection can be
                Wi-Fi, or provided by your mobile network provider, but the developer
                cannot take responsibility for the app not working at full functionality
                if you don’t have access to Wi-Fi, and you don’t have any of your data
                allowance left.
            </p>
            <p>
                If you’re using the app outside of an area with Wi-Fi, you should remember
                that your terms of the agreement with your mobile network provider will
                still apply. As a result, you may be charged by your mobile provider for
                the cost of data for the duration of the connection while accessing the
                app, or other third party charges. In using the app, you’re accepting
                responsibility for any such charges, including roaming data charges if you
                use the app outside of your home territory (i.e. region or country)
                without turning off data roaming. If you are not the bill payer for the
                device on which you’re using the app, please be aware that we assume that
                you have received permission from the bill payer for using the app.
            </p>
            <p>
                Along the same lines, the developer cannot always take responsibility for
                the way you use the app i.e. You need to make sure that your device stays
                charged – if it runs out of battery and you can’t turn it on to avail the
                Service, the developer cannot accept responsibility.
            </p>
            <p>
                With respect to the developer’s responsibility for your use of the app,
                when you’re using the app, it’s important to bear in mind that although we
                endeavour to ensure that it is updated and correct at all times, we do
                rely on third parties to provide information to us so that we can make it
                available to you. The developer accepts no liability for any loss, direct
                or indirect, you experience as a result of relying wholly on this
                functionality of the app.
            </p>
            <p>
                At some point, we may wish to update the app. The app is currently
                available on iOS – the requirements for system (and for any additional
                systems we decide to extend the availability of the app to) may change,
                and you’ll need to download the updates if you want to keep using the app.
                The developer does not promise that it will always update the app so that
                it is relevant to you and/or works with the iOS version that you have
                installed on your device. However, you promise to always accept updates
                to the application when offered to you. We may also wish to stop providing
                the app, and may terminate use of it at any time without giving notice of
                termination to you. Unless we tell you otherwise, upon any termination,
                (a) the rights and licenses granted to you in these terms will end; (b)
                you must stop using the app, and (if needed) delete it from your device.
            </p>

            <h2>Changes to This Terms and Conditions</h2>
            <p>
                I may update our Terms and Conditions from time to time. Thus, you are
                advised to review this page periodically for any changes. I will notify
                you of any changes by posting the new Terms and Conditions on this page.
                These changes are effective immediately after they are posted on this
                page.
            </p>

            <h2>Contact Us</h2>
            <p>
                If you have any questions or suggestions about my Terms and Conditions, do
                not hesitate to contact me at{' '}
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
            </p>
        </>
    )
}

function RussianBody() {
    return (
        <>
            <p>
                Загружая или используя приложение, вы автоматически принимаете настоящие
                условия - поэтому, пожалуйста, внимательно прочитайте их перед
                использованием приложения. Вам запрещается копировать или изменять
                приложение, любую его часть или наши товарные знаки каким-либо образом.
                Вам запрещается пытаться извлечь исходный код приложения, а также не
                следует переводить приложение на другие языки или создавать производные
                версии. Само приложение, а также все товарные знаки, авторские права,
                права на базы данных и иные права интеллектуальной собственности,
                связанные с ним, по-прежнему принадлежат разработчику.
            </p>
            <p>
                Разработчик стремится сделать приложение максимально полезным и
                эффективным. По этой причине мы оставляем за собой право вносить изменения
                в приложение или взимать плату за его услуги в любое время и по любой
                причине. Мы никогда не будем взимать с вас плату за приложение или его
                услуги, не разъяснив вам предельно ясно, за что именно вы платите.
            </p>
            <p>
                Приложение «Alisie» хранит и обрабатывает персональные данные, которые вы
                нам предоставили, для предоставления моего Сервиса. Вы несёте
                ответственность за сохранность своего телефона и доступа к приложению.
                Поэтому мы рекомендуем не выполнять джейлбрейк или рутирование вашего
                телефона - то есть процесс снятия программных ограничений, установленных
                официальной операционной системой вашего устройства. Это может сделать ваш
                телефон уязвимым для вредоносного ПО, вирусов и вредоносных программ,
                нарушить функции безопасности телефона и привести к тому, что приложение
                «Alisie» не будет работать должным образом или вовсе.
            </p>
            <p>
                Следует учитывать, что есть определённые вещи, за которые разработчик не
                несёт ответственности. Некоторые функции приложения требуют активного
                интернет-соединения. Соединение может быть по Wi-Fi или предоставляться
                вашим мобильным оператором, но разработчик не может нести ответственность
                за неполную работу приложения, если у вас нет доступа к Wi-Fi и не
                осталось доступного объёма мобильного трафика.
            </p>
            <p>
                Если вы используете приложение вне зоны действия Wi-Fi, помните, что
                условия вашего соглашения с мобильным оператором по-прежнему действуют. В
                результате ваш мобильный оператор может взимать с вас плату за передачу
                данных в течение времени подключения при использовании приложения или иные
                сторонние сборы. Используя приложение, вы принимаете на себя
                ответственность за любые подобные расходы, включая плату за роуминг, если
                вы используете приложение за пределами своей домашней территории (то есть
                региона или страны) без отключения передачи данных в роуминге. Если вы не
                являетесь плательщиком за устройство, на котором используете приложение,
                учтите, что мы предполагаем, что вы получили разрешение на использование
                приложения от плательщика.
            </p>
            <p>
                Аналогичным образом разработчик не всегда может нести ответственность за
                то, как вы используете приложение. Например, вам необходимо следить за
                тем, чтобы ваше устройство было заряжено: если оно разрядится и вы не
                сможете включить его для использования Сервиса, разработчик не может нести
                за это ответственность.
            </p>
            <p>
                Что касается ответственности разработчика за использование вами
                приложения, при использовании приложения важно помнить, что, хотя мы
                стремимся обеспечить его актуальность и корректность в любое время, мы
                полагаемся на третьи стороны, которые предоставляют нам информацию, чтобы
                мы могли сделать её доступной для вас. Разработчик не несёт ответственности
                за любые убытки, прямые или косвенные, которые вы понесёте в результате
                полного полагания на эту функциональность приложения.
            </p>
            <p>
                В какой-то момент мы можем захотеть обновить приложение. В настоящее время
                приложение доступно на iOS - требования к системе (и к любым
                дополнительным системам, на которые мы решим распространить доступность
                приложения) могут меняться, и вам потребуется загружать обновления, если
                вы хотите продолжать пользоваться приложением. Разработчик не обещает, что
                всегда будет обновлять приложение так, чтобы оно оставалось актуальным для
                вас и/или работало с той версией iOS, которая установлена на вашем
                устройстве. Однако вы обязуетесь всегда принимать обновления приложения,
                когда они вам предлагаются. Мы также можем захотеть прекратить
                предоставление приложения и можем прекратить его использование в любое
                время без предварительного уведомления. Если мы не уведомим вас об ином,
                при любом прекращении (a) права и лицензии, предоставленные вам в настоящих
                условиях, прекращаются; (b) вы должны прекратить использование приложения и
                (при необходимости) удалить его со своего устройства.
            </p>

            <h2>Изменения в настоящих Условиях использования</h2>
            <p>
                Время от времени я могу обновлять наши Условия использования. Поэтому
                рекомендуется периодически просматривать эту страницу на предмет изменений.
                Я буду уведомлять вас о любых изменениях, публикуя новые Условия
                использования на этой странице. Эти изменения вступают в силу сразу после
                их публикации на этой странице.
            </p>

            <h2>Свяжитесь с нами</h2>
            <p>
                Если у вас есть вопросы или предложения по поводу моих Условий
                использования, не стесняйтесь связаться со мной по адресу{' '}
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
            </p>
        </>
    )
}

export default function TermsContent({ locale }: { locale: Locale }) {
    const t = ui(locale)
    return (
        <LocaleProvider locale={locale}>
            <PageBody title={t.termsTitle} updated={t.legalUpdatedDate}>
                {locale === 'ru' ? <RussianBody /> : <EnglishBody />}
            </PageBody>
        </LocaleProvider>
    )
}
