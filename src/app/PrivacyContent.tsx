'use client'
import LegalPage from '../components/LegalPage/LegalPage'
import { LocaleProvider } from '../i18n/LocaleContext'
import type { Locale } from '../i18n/locale'
import { ui } from '../i18n/ui'

const CONTACT_EMAIL = 'alisieapp@proton.me'
const APPMETRICA_URL = 'https://yandex.ru/legal/appmetrica_sdk_agreement/ru/'

function EnglishBody() {
    return (
        <>
            <p>
                I built the «Alisie» app as a Commercial app. This SERVICE is
                provided by and is intended for use as is.
            </p>
            <p>
                This page is used to inform visitors regarding my policies with the
                collection, use, and disclosure of Personal Information if anyone
                decided to use my Service.
            </p>
            <p>
                If you choose to use my Service, then you agree to the collection and
                use of information in relation to this policy. The Personal Information
                that I collect is used for providing and improving the Service. I will
                not use or share your information with anyone except as described in
                this Privacy Policy.
            </p>
            <p>
                The terms used in this Privacy Policy have the same meanings as in our
                Terms and Conditions, which is accessible at «Alisie» unless otherwise
                defined in this Privacy Policy.
            </p>

            <h2>Information Collection and Use</h2>
            <p>
                For a better experience, while using our Service, I may require you to
                provide us with certain personally identifiable information. The
                information that I request will be retained on your device and is not
                collected by me in any way.
            </p>
            <p>
                The app does use third party services, in particular Apple Inc. (iCloud)
                for data sync and storage, and a mobile analytics service.
            </p>

            <h2>Analytics</h2>
            <p>
                The app uses AppMetrica, a third-party mobile analytics service, to
                collect anonymous, aggregated statistics about how the app is used (such
                as feature usage, sessions, device type and operating system version).
                This information helps me understand usage patterns and improve the app.
                It is not used to personally identify you. You can review the terms under
                which this data is processed in the{' '}
                <a href={APPMETRICA_URL} target='_blank' rel='noopener noreferrer'>
                    AppMetrica SDK Agreement
                </a>
                .
            </p>

            <h2>Log Data</h2>
            <p>
                I want to inform you that whenever you use my Service, in a case of an
                error in the app I collect data and information (through third party
                products) on your phone called Log Data. This Log Data may include
                information such as your device Internet Protocol (“IP”) address, device
                name, operating system version, the configuration of the app when
                utilizing my Service, the time and date of your use of the Service, and
                other statistics.
            </p>

            <h2>Cookies</h2>
            <p>
                Cookies are files with a small amount of data that are commonly used as
                anonymous unique identifiers. These are sent to your browser from the
                websites that you visit and are stored on your device's internal memory.
            </p>
            <p>
                This Service does not use these “cookies” explicitly. However, the app
                may use third party code and libraries that use “cookies” to collect
                information and improve their services. You have the option to either
                accept or refuse these cookies and know when a cookie is being sent to
                your device. If you choose to refuse our cookies, you may not be able to
                use some portions of this Service.
            </p>

            <h2>Service Providers</h2>
            <p>
                I may employ third-party companies due to the following reasons:
            </p>
            <ul>
                <li>To facilitate our Service;</li>
                <li>To provide the Service on our behalf;</li>
                <li>To perform Service-related services; or</li>
                <li>To assist us in analyzing how our Service is used.</li>
            </ul>
            <p>
                In particular, this includes Apple Inc., whose iCloud service is used to
                sync and store your data across your devices.
            </p>
            <p>
                I want to inform users of this Service that these third parties have
                access to your Personal Information. The reason is to perform the tasks
                assigned to them on our behalf. However, they are obligated not to
                disclose or use the information for any other purpose.
            </p>

            <h2>Security</h2>
            <p>
                I value your trust in providing us your Personal Information, thus we are
                striving to use commercially acceptable means of protecting it. But
                remember that no method of transmission over the internet, or method of
                electronic storage is 100% secure and reliable, and I cannot guarantee
                its absolute security.
            </p>

            <h2>Links to Other Sites</h2>
            <p>
                This Service may contain links to other sites. If you click on a
                third-party link, you will be directed to that site. Note that these
                external sites are not operated by me. Therefore, I strongly advise you
                to review the Privacy Policy of these websites. I have no control over
                and assume no responsibility for the content, privacy policies, or
                practices of any third-party sites or services.
            </p>

            <h2>Children’s Privacy</h2>
            <p>
                These Services do not address anyone under the age of 13. I do not
                knowingly collect personally identifiable information from children
                under 13. In the case I discover that a child under 13 has provided me
                with personal information, I immediately delete this from our servers. If
                you are a parent or guardian and you are aware that your child has
                provided us with personal information, please contact me so that I will
                be able to do necessary actions.
            </p>

            <h2>Changes to This Privacy Policy</h2>
            <p>
                I may update our Privacy Policy from time to time. Thus, you are advised
                to review this page periodically for any changes. I will notify you of
                any changes by posting the new Privacy Policy on this page. These changes
                are effective immediately after they are posted on this page.
            </p>

            <h2>Contact Us</h2>
            <p>
                If you have any questions or suggestions about my Privacy Policy, do not
                hesitate to contact me at{' '}
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
            </p>
        </>
    )
}

function RussianBody() {
    return (
        <>
            <p>
                Я разработал приложение «Alisie» как коммерческое приложение. Этот
                СЕРВИС предоставляется и предназначен для использования «как есть».
            </p>
            <p>
                Эта страница информирует посетителей о моих принципах в отношении сбора,
                использования и раскрытия персональной информации в случае, если вы
                решите воспользоваться моим Сервисом.
            </p>
            <p>
                Если вы решите пользоваться моим Сервисом, вы соглашаетесь на сбор и
                использование информации в соответствии с настоящей политикой.
                Персональная информация, которую я собираю, используется для
                предоставления и улучшения Сервиса. Я не буду использовать или передавать
                вашу информацию кому-либо, кроме случаев, описанных в настоящей Политике
                конфиденциальности.
            </p>
            <p>
                Термины, используемые в настоящей Политике конфиденциальности, имеют те
                же значения, что и в наших Условиях использования, доступных в «Alisie»,
                если иное не определено в настоящей Политике конфиденциальности.
            </p>

            <h2>Сбор и использование информации</h2>
            <p>
                Для более удобного использования Сервиса я могу попросить вас
                предоставить определённую персональную информацию. Запрашиваемая
                информация хранится на вашем устройстве и никак мной не собирается.
            </p>
            <p>
                Приложение использует сторонние сервисы, в частности Apple Inc. (iCloud)
                для синхронизации и хранения данных, а также службу мобильной аналитики.
            </p>

            <h2>Аналитика</h2>
            <p>
                Приложение использует AppMetrica - стороннюю службу мобильной аналитики -
                для сбора анонимной, агрегированной статистики о том, как используется
                приложение (например, использование функций, сессии, тип устройства и
                версия операционной системы). Эта информация помогает мне понимать
                закономерности использования и улучшать приложение. Она не используется
                для вашей персональной идентификации. С условиями, на которых
                обрабатываются эти данные, можно ознакомиться в{' '}
                <a href={APPMETRICA_URL} target='_blank' rel='noopener noreferrer'>
                    Условиях использования AppMetrica SDK
                </a>
                .
            </p>

            <h2>Данные журнала</h2>
            <p>
                Хочу сообщить, что каждый раз при использовании Сервиса в случае ошибки в
                приложении я собираю данные и информацию (через сторонние продукты) на
                вашем телефоне, называемые «данными журнала». Эти данные журнала могут
                включать такую информацию, как IP-адрес вашего устройства, название
                устройства, версия операционной системы, конфигурация приложения при
                использовании Сервиса, время и дата использования Сервиса, а также другую
                статистику.
            </p>

            <h2>Файлы cookie</h2>
            <p>
                Файлы cookie - это файлы с небольшим объёмом данных, которые обычно
                используются как анонимные уникальные идентификаторы. Они отправляются в
                ваш браузер с посещаемых вами сайтов и сохраняются во внутренней памяти
                вашего устройства.
            </p>
            <p>
                Этот Сервис не использует такие «cookie» напрямую. Однако приложение может
                использовать сторонний код и библиотеки, которые применяют «cookie» для
                сбора информации и улучшения своих сервисов. Вы можете принять или
                отклонить эти файлы cookie и знать, когда cookie отправляется на ваше
                устройство. Если вы откажетесь от наших файлов cookie, вы можете потерять
                возможность пользоваться некоторыми частями этого Сервиса.
            </p>

            <h2>Поставщики услуг</h2>
            <p>
                Я могу привлекать сторонние компании по следующим причинам:
            </p>
            <ul>
                <li>для облегчения работы нашего Сервиса;</li>
                <li>для предоставления Сервиса от нашего имени;</li>
                <li>для выполнения связанных с Сервисом услуг; или</li>
                <li>для помощи в анализе того, как используется наш Сервис.</li>
            </ul>
            <p>
                В частности, это касается компании Apple Inc., чей сервис iCloud
                используется для синхронизации и хранения ваших данных между устройствами.
            </p>
            <p>
                Хочу сообщить пользователям этого Сервиса, что эти третьи стороны имеют
                доступ к вашей персональной информации. Это необходимо для выполнения
                порученных им от нашего имени задач. Однако они обязаны не раскрывать и не
                использовать эту информацию в любых иных целях.
            </p>

            <h2>Безопасность</h2>
            <p>
                Я ценю ваше доверие при предоставлении персональной информации, поэтому
                стремлюсь использовать коммерчески приемлемые средства её защиты. Но
                помните, что ни один метод передачи данных через интернет или метод
                электронного хранения не является на 100% безопасным и надёжным, и я не
                могу гарантировать его абсолютную безопасность.
            </p>

            <h2>Ссылки на другие сайты</h2>
            <p>
                Этот Сервис может содержать ссылки на другие сайты. Если вы нажмёте на
                стороннюю ссылку, вы будете перенаправлены на этот сайт. Обратите
                внимание, что эти внешние сайты управляются не мной. Поэтому я настоятельно
                рекомендую ознакомиться с Политикой конфиденциальности этих сайтов. Я не
                контролирую и не несу ответственности за содержание, политики
                конфиденциальности или практики любых сторонних сайтов или сервисов.
            </p>

            <h2>Конфиденциальность детей</h2>
            <p>
                Эти Сервисы не предназначены для лиц младше 13 лет. Я сознательно не
                собираю персональную информацию у детей младше 13 лет. Если я обнаружу,
                что ребёнок младше 13 лет предоставил мне персональную информацию, я
                немедленно удаляю её с наших серверов. Если вы являетесь родителем или
                опекуном и вам известно, что ваш ребёнок предоставил нам персональную
                информацию, пожалуйста, свяжитесь со мной, чтобы я мог предпринять
                необходимые действия.
            </p>

            <h2>Изменения в настоящей Политике конфиденциальности</h2>
            <p>
                Время от времени я могу обновлять нашу Политику конфиденциальности.
                Поэтому рекомендуется периодически просматривать эту страницу на предмет
                изменений. Я буду уведомлять вас о любых изменениях, публикуя новую
                Политику конфиденциальности на этой странице. Эти изменения вступают в
                силу сразу после их публикации на этой странице.
            </p>

            <h2>Свяжитесь с нами</h2>
            <p>
                Если у вас есть вопросы или предложения по поводу моей Политики
                конфиденциальности, не стесняйтесь связаться со мной по адресу{' '}
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
            </p>
        </>
    )
}

export default function PrivacyContent({ locale }: { locale: Locale }) {
    const t = ui(locale)
    return (
        <LocaleProvider locale={locale}>
            <LegalPage title={t.privacyPolicyTitle} updated={t.legalUpdatedDate}>
                {locale === 'ru' ? <RussianBody /> : <EnglishBody />}
            </LegalPage>
        </LocaleProvider>
    )
}
