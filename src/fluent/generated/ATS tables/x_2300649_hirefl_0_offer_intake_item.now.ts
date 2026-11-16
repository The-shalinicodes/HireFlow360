
import {
    Table,
    StringColumn,
    ReferenceColumn,
    ChoiceColumn,
} from '@servicenow/sdk/core'

export const x_2300649_hirefl_0_offer_intake_item = Table({
    name: 'x_2300649_hirefl_0_offer_intake_item',
    label: 'HireFlow Offer Intake Item',
    schema: {
        intake: ReferenceColumn({
            label: 'Offer Intake Batch',
            referenceTable: 'x_2300649_hirefl_0_offer_intake',
            mandatory: true,
        }),

        attachment_id: StringColumn({
            label: 'Attachment Sys ID',
            maxLength: 40,
        }),

        file_name: StringColumn({
            label: 'Uploaded File Name',
            maxLength: 255,
            mandatory: true,
        }),

        processing_status: ChoiceColumn({
            label: 'Processing Status',
            choices: {
                uploaded: { label: 'Uploaded' },
                processing: { label: 'Processing' },
                extracted: { label: 'Data Extracted' },
                review_required: { label: 'Review Required' },
                completed: { label: 'Completed' },
                failed: { label: 'Failed' },
            },
            default: 'uploaded',
            mandatory: true,
        }),

        extracted_data: StringColumn({
            label: 'Extracted Offer Data',
            maxLength: 4000,
        }),

        error_message: StringColumn({
            label: 'Processing Error',
            maxLength: 2000,
        }),

        applicant: ReferenceColumn({
            label: 'Matched Applicant',
            referenceTable: 'x_2300649_hirefl_0_applicant',
        }),

        offer: ReferenceColumn({
            label: 'Generated Offer',
            referenceTable: 'x_2300649_hirefl_0_offer',
        }),

        joiner: ReferenceColumn({
            label: 'Generated Joiner',
            referenceTable: 'x_2300649_hirefl_0_joiner',
        }),
    },
})
