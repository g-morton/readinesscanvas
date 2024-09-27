const categories = [
    {
        "category": "Information Management (IM)",
        "subCategories": [
            "Retention (01)",
            "Disposal (02)",
            "Records Management (03)",
            "Data Governance (04)"
        ]
    },
    {
        "category": "Information Security (IS)",
        "subCategories": [
            "Access Control (02)",
            "Data Encryption (08)",
            "Incident Response (07)",
            "Vulnerability Management (06)",
            "Identification and Authentication (01)",
            "System Entry Control (09)",
            "Auditability (03)",
            "Non-repudiation (04)",
            "Security Management (05)",
            "Patch Management (10)"
        ]
    },
    {
        "category": "Interoperability (IP)",
        "subCategories": [
            "System Integration (01)",
            "Compatibility (02)",
            "API Management (03)"
        ]
    },
    {
        "category": "Maintainability (MT)",
        "subCategories": [
            "Supportability (03)",
            "Change Management (01)"
        ]
    },
    {
        "category": "Performance (PF)",
        "subCategories": [
            "Capacity Management (01)",
            "Performance Monitoring (03)",
            "Scalability (02)"
        ]
    },
    {
        "category": "Portability (PT)",
        "subCategories": [
            "Adaptability (01)",
            "Modifiability (02)"
        ]
    },
    {
        "category": "Privacy (PR)",
        "subCategories": [
            "Data Protection (02)",
            "Consent Management (01)"
        ]
    }
];


const questions = {
    "Retention (01)": [
        { "question": "User data will be stored over time", "subCategory": "Retention (01)" }
    ],
    "Disposal (02)": [
        { "question": "Users can choose to leave the product", "subCategory": "Disposal (02)" }
    ],
    "Records Management (03)": [
        { "question": "The product will store complex information", "subCategory": "Records Management (03)" }
    ],
    "Data Governance (04)": [
        { "question": "Some stored information may be sensitive or personal in nature", "subCategory": "Data Governance (04)" }
    ],
    "Access Control (02)": [
        { "question": "The product will support different personas", "subCategory": "Access Control (02)" }
    ],
    "Data Encryption (08)": [
        { "question": "Some stored information could be sensitive", "subCategory": "Data Encryption (08)" }
    ],
    "Incident Response (07)": [
        { "question": "The product must not be used maliciously", "subCategory": "Incident Response (07)" }
    ],
    "Vulnerability Management (06)": [
        { "question": "The product must not allow bad actors to interfere", "subCategory": "Vulnerability Management (06)" }
    ],
    "Identification and Authentication (01)": [
        { "question": "Users can sign in to the product", "subCategory": "Identification and Authentication (01)" }
    ],
    "System Entry Control (09)": [
        { "question": "The product has a membership area", "subCategory": "System Entry Control (09)" }
    ],
    "Auditability (03)": [
        { "question": "User activity should be logged", "subCategory": "Auditability (03)" }
    ],
    "Non-repudiation (04)": [
        { "question": "User actions should be traceable", "subCategory": "Non-repudiation (04)" }
    ],
    "Security Management (05)": [
        { "question": "The product will have security measures in place", "subCategory": "Security Management (05)" }
    ],
    "Patch Management (10)": [
        { "question": "The product may require updates", "subCategory": "Patch Management (10)" }
    ],
    "System Integration (01)": [
        { "question": "The product may connect with other services", "subCategory": "System Integration (01)" }
    ],
    "Compatibility (02)": [
        { "question": "The product may exchange information with other services", "subCategory": "Compatibility (02)" }
    ],
    "API Management (03)": [
        { "question": "The product will use API connections", "subCategory": "API Management (03)" }
    ],
    "Supportability (03)": [
        { "question": "The product may grow and evolve over time", "subCategory": "Supportability (03)" }
    ],
    "Change Management (01)": [
        { "question": "Ongoing product releases are planned", "subCategory": "Change Management (01)" }
    ],
    "Capacity Management (01)": [
        { "question": "User demand may continue to grow", "subCategory": "Capacity Management (01)" }
    ],
    "Performance Monitoring (03)": [
        { "question": "Growth in usage will impact performance", "subCategory": "Performance Monitoring (03)" }
    ],
    "Scalability (02)": [
        { "question": "Sudden user uptake or activity is possible", "subCategory": "Scalability (02)" }
    ],
    "Adaptability (01)": [
        { "question": "The product could change technology in the future", "subCategory": "Adaptability (01)" }
    ],
    "Modifiability (02)": [
        { "question": "Features could change rapidly", "subCategory": "Modifiability (02)" }
    ],
    "Data Protection (02)": [
        { "question": "Personal information will be stored", "subCategory": "Data Protection (02)" }
    ],
    "Consent Management (01)": [
        { "question": "Users will be asked to provide information about themselves", "subCategory": "Consent Management (01)" }
    ]
};


const nfrs = {
    "Retention (01)": [
        { "status": "M", "id": "IM.01.001", "label": "The Supplier MUST provide certifications for the deletion of customer or user data." },
        { "status": "S", "id": "IM.01.002", "label": "The Supplier SHOULD provide information surrounding the sharing of user data with third parties in any circumstance and any permission should be obtained in writing from an authorised person from the customer." },
        { "status": "M", "id": "IM.01.003", "label": "The solution MUST have the ability to easily manage the storage, archiving and disposal of data." },
        { "status": "M", "id": "IM.01.004", "label": "The system MUST retain data for a specified duration as per regulatory or business requirements." },
        { "status": "S", "id": "IM.01.005", "label": "The system MAY support data archiving policies that ensure data is moved to appropriate storage tiers." },
        { "status": "S", "id": "IM.01.006", "label": "The system SHOULD manage retention schedules and enforce policies automatically." }
    ],
    "Disposal (02)": [
        { "status": "M", "id": "IM.02.001", "label": "The system MUST support policies for the secure disposal of data once the retention period expires." },
        { "status": "S", "id": "IM.02.002", "label": "The system SHOULD automate the disposal process to ensure compliance with data disposal policies." },
        { "status": "M", "id": "IM.02.003", "label": "The system MUST ensure that data is irrecoverably deleted in accordance with regulatory standards." }
    ],
    "Records Management (03)": [
        { "status": "M", "id": "IM.03.001", "label": "The system MUST classify data based on sensitivity, retention requirements, and disposal policies." },
        { "status": "S", "id": "IM.03.002", "label": "The system SHOULD manage metadata for all records to support retention and disposal policies." },
        { "status": "S", "id": "IM.03.003", "label": "The system MAY support legal holds to prevent data disposal when required by legal proceedings." },
        { "status": "M", "id": "IM.03.004", "label": "The system MUST provide audit trails for data retention and disposal activities for compliance audits." }
    ],
    "Data Governance (04)": [
        { "status": "S", "id": "IM.04.001", "label": "The system SHOULD allow for updates to retention policies and ensure that changes are applied uniformly." }
    ],
    "Access Control (02)": [
        { "status": "M", "id": "IS.02.001", "label": "The system MUST support secure access control policies to restrict unauthorized access." },
        { "status": "S", "id": "IS.02.002", "label": "The system SHOULD support role-based access control (RBAC) to manage different personas." }
    ],
    "Data Encryption (08)": [
        { "status": "M", "id": "IS.08.001", "label": "Sensitive data MUST be encrypted both at rest and in transit." },
        { "status": "S", "id": "IS.08.002", "label": "The system SHOULD support encryption key management policies." }
    ],
    "Incident Response (07)": [
        { "status": "M", "id": "IS.07.001", "label": "The system MUST support incident response policies and procedures." },
        { "status": "S", "id": "IS.07.002", "label": "The system SHOULD support automated alerts for security breaches." }
    ],
    "Vulnerability Management (06)": [
        { "status": "M", "id": "IS.06.001", "label": "The system MUST be regularly scanned for vulnerabilities." },
        { "status": "S", "id": "IS.06.002", "label": "The system SHOULD support automated vulnerability management." }
    ],
    "Identification and Authentication (01)": [
        { "status": "M", "id": "IS.01.001", "label": "The system MUST support multi-factor authentication for user access." },
        { "status": "S", "id": "IS.01.002", "label": "The system SHOULD support single sign-on (SSO) integration." }
    ],
    "System Entry Control (09)": [
        { "status": "M", "id": "IS.09.001", "label": "The system MUST restrict access to protected areas." },
        { "status": "S", "id": "IS.09.002", "label": "The system SHOULD allow for logging of entry attempts." }
    ],
    "Auditability (03)": [
        { "status": "M", "id": "IS.03.001", "label": "User activities MUST be logged for audit purposes." },
        { "status": "S", "id": "IS.03.002", "label": "The system SHOULD support log analysis for auditing." }
    ],
    "Non-repudiation (04)": [
        { "status": "M", "id": "IS.04.001", "label": "The system MUST ensure non-repudiation for critical actions." },
        { "status": "S", "id": "IS.04.002", "label": "The system SHOULD log all critical transactions." }
    ],
    "Security Management (05)": [
        { "status": "M", "id": "IS.05.001", "label": "The system MUST have security management policies in place." },
        { "status": "S", "id": "IS.05.002", "label": "The system SHOULD support regular security audits." }
    ],
    "Patch Management (10)": [
        { "status": "M", "id": "IS.11.001", "label": "The system MUST be designed to allow for updates and patches to be applied without requiring a full reinstallation." },
        { "status": "S", "id": "IS.11.002", "label": "The platform SHOULD include comprehensive, automated testing frameworks to verify the integrity of updates and patches before deployment." },
        { "status": "M", "id": "IS.11.003", "label": "The platform MUST ensure that critical updates can be applied with minimal impact on system performance and user experience." }
    ],
    "System Integration (01)": [
        { "status": "S", "id": "IP.01.001", "label": "The Supplier SHOULD provide evidence that the solution has undergone Hub Integration Testing Service (HITS)." }
    ],
    "Compatibility (02)": [
        { "status": "S", "id": "IP.02.001", "label": "The product SHOULD be compatible with other products or services used by the department." }
    ],
    "API Management (03)": [
        { "status": "S", "id": "IP.03.001", "label": "The Supplier SHOULD provide documentation for APIs used by the product." }
    ],
    "Supportability (03)": [
        { "status": "M", "id": "MT.03.001", "label": "Documentation for maintenance procedures MUST be comprehensive and kept up to date with each new release." },
        { "status": "M", "id": "MT.03.002", "label": "All configuration settings MUST be documented and easily editable to ensure maintainability across different environments." },
        { "status": "S", "id": "MT.03.003", "label": "Users SHOULD easily access up-to-date Help Content natively within the application, via a web browser or mobile app." },
        { "status": "S", "id": "MT.03.004", "label": "The supplier MUST provide at minimum one avenue of support available during DoE Business Operations (Mon to Friday 7:00 am till 5:00 pm)." },
        { "status": "S", "id": "MT.03.005", "label": "The supplier SHOULD ensure the following methods of support are available: Phone, Helpdesk, Online, and Email." }
    ],
    "Change Management (01)": [
        { "status": "M", "id": "MT.01.001", "label": "The system MUST support change management policies and procedures." },
        { "status": "S", "id": "MT.01.002", "label": "The system SHOULD provide tools for tracking change requests." }
    ],
    "Capacity Management (01)": [
        { "status": "M", "id": "PF.01.001", "label": "The solution MUST be able to meet the performance expectations of the department without changing the functionality or operation of the solution." },
        { "status": "S", "id": "PF.01.002", "label": "The solution MUST describe any limits on data stored within the solution." }
    ],
    "Performance Monitoring (03)": [
        { "status": "M", "id": "PF.03.001", "label": "The system MUST support real-time performance monitoring to identify bottlenecks." },
        { "status": "S", "id": "PF.03.002", "label": "The system SHOULD generate performance reports for analysis." }
    ],
    "Scalability (02)": [
        { "status": "M", "id": "PF.02.001", "label": "The system MUST scale to handle sudden increases in user activity." },
        { "status": "S", "id": "PF.02.002", "label": "The system SHOULD automatically scale up or down based on demand." }
    ],
    "Adaptability (01)": [
        { "status": "S", "id": "PT.01.001", "label": "The system SHOULD support adaptation to new technologies and requirements." }
    ],
    "Modifiability (02)": [
        { "status": "S", "id": "PT.02.001", "label": "The system SHOULD be easily modifiable to support changing business needs." }
    ],
    "Data Protection (02)": [
        { "status": "M", "id": "PR.02.001", "label": "The system MUST ensure the protection of personal data in compliance with regulatory standards." },
        { "status": "S", "id": "PR.02.002", "label": "The system SHOULD provide encryption and anonymization for sensitive data." }
    ],
    "Consent Management (01)": [
        { "status": "M", "id": "PR.01.001", "label": "The system MUST support user consent management and ensure compliance with privacy regulations." },
        { "status": "S", "id": "PR.01.002", "label": "The system SHOULD allow users to manage their consent preferences." }
    ]
};
