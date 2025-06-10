import React from 'react';
import { useTranslation } from 'react-i18next';

const Privacy: React.FC = () => {
    const { t } = useTranslation();

    const privacySections = [
        {
            titleKey: 'privacy.data_collection_title',
            textKey: 'privacy.data_collection_text',
        },
        {
            titleKey: 'privacy.embedded_browser_title',
            textKey: 'privacy.embedded_browser_text',
        },
        {
            titleKey: 'privacy.use_of_data_title',
            textKey: 'privacy.use_of_data_text',
        },
        {
            titleKey: 'privacy.security_title',
            textKey: 'privacy.security_text',
        },
        {
            titleKey: 'privacy.third_party_content_title',
            textKey: 'privacy.third_party_content_text',
        },
        {
            titleKey: 'privacy.changes_to_policy_title',
            textKey: 'privacy.changes_to_policy_text',
        },
        {
            titleKey: 'privacy.contact_info_title',
            textKey: 'privacy.contact_info_text',
        },
    ];

    return (
        <div className="relative px-4 py-8 md:px-8 md:py-16 overflow-hidden">
            <div className="h-20 md:h-16 lg:h-20"></div>

            <div className="max-w-7xl mx-auto text-sm md:text-base">
                <h2 className="mb-4 mx-auto font-medium text-center text-xl md:mb-6 md:text-4xl md:w-4/5 lg:w-3/5">
                    {t('privacy.privacy_policy_title')}
                </h2>

                <div className="flex flex-col gap-3 md:gap-4">
                    <p className="text-gray-300">
                        {t('privacy.effective_date')}
                    </p>

                    <p>{t('privacy.intro_text')}</p>

                    <ul className="list-decimal pl-6 flex flex-col gap-3 font-medium text-lg md:text-xl md:gap-4">
                        {privacySections.map((section, index) => (
                            <li key={index}>
                                <h3 className="mb-1 md:mb-2">{t(section.titleKey)}</h3>
                                <p className="font-normal text-sm md:text-base">{t(section.textKey)}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Privacy;