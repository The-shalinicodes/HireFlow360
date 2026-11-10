
import {
    Table,
    StringColumn,
    IntegerColumn,
    ChoiceColumn,
} from '@servicenow/sdk/core'

export const x_2300649_hirefl_0_applicant = Table({
    name: 'x_2300649_hirefl_0_applicant',
    label: 'HireFlow Applicant',
    schema: {
        applicant_id: StringColumn({
            label: 'Applicant ID',
            maxLength: 40,
            readOnly: true,
            unique: true,
        }),
        full_name: StringColumn({
            label: 'Full Name',
            maxLength: 150,
            mandatory: true,
            display: true,
        }),
        email: StringColumn({
            label: 'Email Address',
            maxLength: 150,
            mandatory: true,
        }),
        phone: StringColumn({
            label: 'Phone Number',
            maxLength: 30,
        }),
        current_company: StringColumn({
            label: 'Current Company',
            maxLength: 150,
        }),
        total_experience: IntegerColumn({
            label: 'Total Experience (Years)',
            default: 0,
        }),
        highest_qualification: ChoiceColumn({
            label: 'Highest Qualification',
            choices: {
                diploma: { label: 'Diploma' },
                bachelors: { label: "Bachelor's Degree" },
                masters: { label: "Master's Degree" },
                doctorate: { label: 'Doctorate' },
                other: { label: 'Other' },
            },
        }),
        skills: StringColumn({
            label: 'Skills',
            maxLength: 2000,
        }),
        portfolio_url: StringColumn({
            label: 'Portfolio or LinkedIn URL',
            maxLength: 500,
        }),
        applicant_source: ChoiceColumn({
            label: 'Applicant Source',
            choices: {
                company_website: { label: 'Company Website' },
                referral: { label: 'Employee Referral' },
                job_portal: { label: 'Job Portal' },
                campus: { label: 'Campus Recruitment' },
                other: { label: 'Other' },
            },
            default: 'company_website',
        }),
    },
})
