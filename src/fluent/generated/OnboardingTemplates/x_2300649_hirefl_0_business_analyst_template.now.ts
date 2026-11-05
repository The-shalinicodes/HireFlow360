// SEED DATA (installs with the application; no demo-data load required).
// offset_days = due date relative to joining date (negative = before Day 1).
// Rule: successor offset >= predecessor offset + successor sla_days.
// HireFlow 360 | Scope: x_2300649_hirefl_0
// Prerequisites: department/location keys and group keys must exist;
// template_task must include the sla_days column.

import { Record } from '@servicenow/sdk/core'

export const tmpl_ba = Record({
    $id: Now.ID['tmpl_ba'],
    table: 'x_2300649_hirefl_0_onboarding_template',
    data: {
        template_name: 'Business Analyst Onboarding',
        job_role: 'business_analyst',
        department: Now.ID['dept_business_analysis'],
        location: Now.ID['loc_hyderabad'],
        version: 1,
        effective_from: '2026-01-01',
        approval_status: 'approved',
        active: true,
    },
})

export const tmpl_ba_c01 = Record({
    $id: Now.ID['tmpl_ba_c01'],
    table: 'x_2300649_hirefl_0_template_task',
    data: {
        template: Now.ID['tmpl_ba'],
        task_name: 'Submit personal documents and e-sign',
        category: 'hr',
        owner_type: 'joiner',
        mandatory: true,
        gate: 'day1',
        weight: 8,
        evidence_required: true,
        verification_source: 'document',
        offset_days: -10,
        sla_days: 3,
        active: true,
    },
})

export const tmpl_ba_c02 = Record({
    $id: Now.ID['tmpl_ba_c02'],
    table: 'x_2300649_hirefl_0_template_task',
    data: {
        template: Now.ID['tmpl_ba'],
        task_name: 'Submit BGV consent and documents',
        category: 'hr',
        owner_type: 'joiner',
        mandatory: true,
        gate: 'day1',
        weight: 9,
        evidence_required: true,
        verification_source: 'document',
        offset_days: -10,
        sla_days: 3,
        active: true,
    },
})

export const tmpl_ba_c03 = Record({
    $id: Now.ID['tmpl_ba_c03'],
    table: 'x_2300649_hirefl_0_template_task',
    data: {
        template: Now.ID['tmpl_ba'],
        task_name: 'Initiate BGV with vendor',
        category: 'hr',
        owner_type: 'group',
        owner_group: Now.ID['grp_hr_ops'],
        mandatory: true,
        gate: 'day1',
        weight: 10,
        evidence_required: true,
        verification_source: 'bgv',
        offset_days: -8,
        sla_days: 2,
        active: true,
    },
})

export const tmpl_ba_c04 = Record({
    $id: Now.ID['tmpl_ba_c04'],
    table: 'x_2300649_hirefl_0_template_task',
    data: {
        template: Now.ID['tmpl_ba'],
        task_name: 'Submit PF declaration and bank details',
        category: 'finance',
        owner_type: 'joiner',
        mandatory: true,
        gate: 'day1',
        weight: 8,
        evidence_required: true,
        verification_source: 'document',
        offset_days: -7,
        sla_days: 3,
        active: true,
    },
})

export const tmpl_ba_c05 = Record({
    $id: Now.ID['tmpl_ba_c05'],
    table: 'x_2300649_hirefl_0_template_task',
    data: {
        template: Now.ID['tmpl_ba'],
        task_name: 'Confirm PF/ESI eligibility and UAN',
        category: 'finance',
        owner_type: 'group',
        owner_group: Now.ID['grp_finance'],
        mandatory: true,
        gate: 'day1',
        weight: 9,
        evidence_required: true,
        verification_source: 'pf',
        offset_days: -4,
        sla_days: 3,
        active: true,
    },
})

export const tmpl_ba_c06 = Record({
    $id: Now.ID['tmpl_ba_c06'],
    table: 'x_2300649_hirefl_0_template_task',
    data: {
        template: Now.ID['tmpl_ba'],
        task_name: 'Complete payroll setup and cost-centre mapping',
        category: 'finance',
        owner_type: 'group',
        owner_group: Now.ID['grp_finance'],
        mandatory: true,
        gate: 'day1',
        weight: 7,
        evidence_required: true,
        verification_source: 'pf',
        offset_days: -1,
        sla_days: 3,
        active: true,
    },
})

export const tmpl_ba_c07 = Record({
    $id: Now.ID['tmpl_ba_c07'],
    table: 'x_2300649_hirefl_0_template_task',
    data: {
        template: Now.ID['tmpl_ba'],
        task_name: 'Allocate laptop and record asset tag',
        category: 'it',
        owner_type: 'group',
        owner_group: Now.ID['grp_it'],
        mandatory: true,
        gate: 'day1',
        weight: 10,
        evidence_required: true,
        verification_source: 'asset',
        offset_days: -7,
        sla_days: 5,
        active: true,
    },
})

export const tmpl_ba_c08 = Record({
    $id: Now.ID['tmpl_ba_c08'],
    table: 'x_2300649_hirefl_0_template_task',
    data: {
        template: Now.ID['tmpl_ba'],
        task_name: 'Create system account and email',
        category: 'it',
        owner_type: 'group',
        owner_group: Now.ID['grp_it'],
        mandatory: true,
        gate: 'day1',
        weight: 10,
        evidence_required: true,
        verification_source: 'account',
        offset_days: -5,
        sla_days: 3,
        active: true,
    },
})

export const tmpl_ba_c09 = Record({
    $id: Now.ID['tmpl_ba_c09'],
    table: 'x_2300649_hirefl_0_template_task',
    data: {
        template: Now.ID['tmpl_ba'],
        task_name: 'Approve access request',
        category: 'security',
        owner_type: 'group',
        owner_group: Now.ID['grp_security'],
        mandatory: true,
        gate: 'day1',
        weight: 8,
        evidence_required: true,
        verification_source: 'security',
        offset_days: -3,
        sla_days: 2,
        active: true,
    },
})

export const tmpl_ba_c10 = Record({
    $id: Now.ID['tmpl_ba_c10'],
    table: 'x_2300649_hirefl_0_template_task',
    data: {
        template: Now.ID['tmpl_ba'],
        task_name: 'Issue ID card',
        category: 'facilities',
        owner_type: 'group',
        owner_group: Now.ID['grp_facilities'],
        mandatory: true,
        gate: 'day1',
        weight: 6,
        evidence_required: true,
        verification_source: 'facilities',
        offset_days: -3,
        sla_days: 3,
        active: true,
    },
})

export const tmpl_ba_c11 = Record({
    $id: Now.ID['tmpl_ba_c11'],
    table: 'x_2300649_hirefl_0_template_task',
    data: {
        template: Now.ID['tmpl_ba'],
        task_name: 'Arrange workspace and seating',
        category: 'facilities',
        owner_type: 'group',
        owner_group: Now.ID['grp_facilities'],
        mandatory: true,
        gate: 'day1',
        weight: 6,
        evidence_required: true,
        verification_source: 'facilities',
        offset_days: -3,
        sla_days: 3,
        active: true,
    },
})

export const tmpl_ba_c12 = Record({
    $id: Now.ID['tmpl_ba_c12'],
    table: 'x_2300649_hirefl_0_template_task',
    data: {
        template: Now.ID['tmpl_ba'],
        task_name: 'Manager confirms desk, equipment and role tasks',
        category: 'hr',
        owner_type: 'manager',
        mandatory: true,
        gate: 'day1',
        weight: 5,
        evidence_required: true,
        verification_source: 'document',
        offset_days: -1,
        sla_days: 1,
        active: true,
    },
})

export const tmpl_ba_c13 = Record({
    $id: Now.ID['tmpl_ba_c13'],
    table: 'x_2300649_hirefl_0_template_task',
    data: {
        template: Now.ID['tmpl_ba'],
        task_name: 'Assign onboarding buddy',
        category: 'hr',
        owner_type: 'manager',
        mandatory: false,
        gate: 'day1',
        weight: 2,
        evidence_required: false,
        verification_source: 'none',
        offset_days: -3,
        sla_days: 3,
        active: true,
    },
})

export const tmpl_ba_c14 = Record({
    $id: Now.ID['tmpl_ba_c14'],
    table: 'x_2300649_hirefl_0_template_task',
    data: {
        template: Now.ID['tmpl_ba'],
        task_name: 'Confirm BGV Clear',
        category: 'hr',
        owner_type: 'group',
        owner_group: Now.ID['grp_hr_ops'],
        mandatory: true,
        gate: 'allocation',
        weight: 10,
        evidence_required: true,
        verification_source: 'bgv',
        offset_days: 15,
        sla_days: 5,
        active: true,
    },
})

export const tmpl_ba_c15 = Record({
    $id: Now.ID['tmpl_ba_c15'],
    table: 'x_2300649_hirefl_0_template_task',
    data: {
        template: Now.ID['tmpl_ba'],
        task_name: 'Complete security awareness training',
        category: 'training',
        owner_type: 'group',
        owner_group: Now.ID['grp_security'],
        mandatory: true,
        gate: 'allocation',
        weight: 8,
        evidence_required: true,
        verification_source: 'training',
        offset_days: 3,
        sla_days: 5,
        active: true,
    },
})

export const tmpl_ba_c16 = Record({
    $id: Now.ID['tmpl_ba_c16'],
    table: 'x_2300649_hirefl_0_template_task',
    data: {
        template: Now.ID['tmpl_ba'],
        task_name: 'Acknowledge compliance and policy documents',
        category: 'hr',
        owner_type: 'joiner',
        mandatory: true,
        gate: 'allocation',
        weight: 6,
        evidence_required: true,
        verification_source: 'document',
        offset_days: 3,
        sla_days: 3,
        active: true,
    },
})

export const tmpl_ba_c17 = Record({
    $id: Now.ID['tmpl_ba_c17'],
    table: 'x_2300649_hirefl_0_template_task',
    data: {
        template: Now.ID['tmpl_ba'],
        task_name: 'Complete induction and record attendance',
        category: 'training',
        owner_type: 'group',
        owner_group: Now.ID['grp_hr_ops'],
        mandatory: true,
        gate: 'post_joining',
        weight: 5,
        evidence_required: true,
        verification_source: 'training',
        offset_days: 0,
        sla_days: 2,
        active: true,
    },
})

export const tmpl_ba_c18 = Record({
    $id: Now.ID['tmpl_ba_c18'],
    table: 'x_2300649_hirefl_0_template_task',
    data: {
        template: Now.ID['tmpl_ba'],
        task_name: 'Meet assigned buddy',
        category: 'hr',
        owner_type: 'buddy',
        mandatory: false,
        gate: 'post_joining',
        weight: 1,
        evidence_required: false,
        verification_source: 'none',
        offset_days: 3,
        sla_days: 5,
        active: true,
    },
})

export const tmpl_ba_c19 = Record({
    $id: Now.ID['tmpl_ba_c19'],
    table: 'x_2300649_hirefl_0_template_task',
    data: {
        template: Now.ID['tmpl_ba'],
        task_name: 'Probation checkpoint review at 30 days',
        category: 'hr',
        owner_type: 'manager',
        mandatory: true,
        gate: 'post_joining',
        weight: 5,
        evidence_required: true,
        verification_source: 'document',
        offset_days: 30,
        sla_days: 5,
        active: true,
    },
})

export const tmpl_ba_c20 = Record({
    $id: Now.ID['tmpl_ba_c20'],
    table: 'x_2300649_hirefl_0_template_task',
    data: {
        template: Now.ID['tmpl_ba'],
        task_name: 'Probation checkpoint review at 60 days',
        category: 'hr',
        owner_type: 'manager',
        mandatory: true,
        gate: 'post_joining',
        weight: 5,
        evidence_required: true,
        verification_source: 'document',
        offset_days: 60,
        sla_days: 5,
        active: true,
    },
})

export const tmpl_ba_c21 = Record({
    $id: Now.ID['tmpl_ba_c21'],
    table: 'x_2300649_hirefl_0_template_task',
    data: {
        template: Now.ID['tmpl_ba'],
        task_name: 'Probation confirmation decision at 90 days',
        category: 'hr',
        owner_type: 'group',
        owner_group: Now.ID['grp_hr_coord'],
        mandatory: true,
        gate: 'post_joining',
        weight: 6,
        evidence_required: true,
        verification_source: 'document',
        offset_days: 90,
        sla_days: 5,
        active: true,
    },
})

export const tmpl_ba_c22 = Record({
    $id: Now.ID['tmpl_ba_c22'],
    table: 'x_2300649_hirefl_0_template_task',
    data: {
        template: Now.ID['tmpl_ba'],
        task_name: 'Complete onboarding experience survey',
        category: 'hr',
        owner_type: 'joiner',
        mandatory: false,
        gate: 'post_joining',
        weight: 1,
        evidence_required: false,
        verification_source: 'none',
        offset_days: 14,
        sla_days: 7,
        active: true,
    },
})

export const tmpl_ba_ba01 = Record({
    $id: Now.ID['tmpl_ba_ba01'],
    table: 'x_2300649_hirefl_0_template_task',
    data: {
        template: Now.ID['tmpl_ba'],
        task_name: 'Provide business analysis tool access',
        category: 'it',
        owner_type: 'group',
        owner_group: Now.ID['grp_it'],
        mandatory: true,
        gate: 'day1',
        weight: 8,
        evidence_required: true,
        verification_source: 'account',
        offset_days: -3,
        sla_days: 2,
        active: true,
    },
})

export const tmpl_ba_ba02 = Record({
    $id: Now.ID['tmpl_ba_ba02'],
    table: 'x_2300649_hirefl_0_template_task',
    data: {
        template: Now.ID['tmpl_ba'],
        task_name: 'Provide documentation platform access',
        category: 'it',
        owner_type: 'group',
        owner_group: Now.ID['grp_it'],
        mandatory: true,
        gate: 'day1',
        weight: 7,
        evidence_required: true,
        verification_source: 'account',
        offset_days: -3,
        sla_days: 2,
        active: true,
    },
})

export const tmpl_ba_ba03 = Record({
    $id: Now.ID['tmpl_ba_ba03'],
    table: 'x_2300649_hirefl_0_template_task',
    data: {
        template: Now.ID['tmpl_ba'],
        task_name: 'Complete stakeholder communication training',
        category: 'training',
        owner_type: 'manager',
        mandatory: true,
        gate: 'allocation',
        weight: 7,
        evidence_required: true,
        verification_source: 'training',
        offset_days: 10,
        sla_days: 5,
        active: true,
    },
})

export const tmpl_ba_ba04 = Record({
    $id: Now.ID['tmpl_ba_ba04'],
    table: 'x_2300649_hirefl_0_template_task',
    data: {
        template: Now.ID['tmpl_ba'],
        task_name: 'Hold business domain induction',
        category: 'training',
        owner_type: 'manager',
        mandatory: true,
        gate: 'post_joining',
        weight: 5,
        evidence_required: true,
        verification_source: 'document',
        offset_days: 5,
        sla_days: 5,
        active: true,
    },
})

export const tmpl_ba_dep_c03_c02 = Record({
    $id: Now.ID['tmpl_ba_dep_c03_c02'],
    table: 'x_2300649_hirefl_0_task_dependency',
    data: {
        dependency_level: 'template',
        template_task: Now.ID['tmpl_ba_c03'],
        depends_on_template_task: Now.ID['tmpl_ba_c02'],
        dependency_type: 'finish_to_start',
        active: true,
    },
})

export const tmpl_ba_dep_c04_c01 = Record({
    $id: Now.ID['tmpl_ba_dep_c04_c01'],
    table: 'x_2300649_hirefl_0_task_dependency',
    data: {
        dependency_level: 'template',
        template_task: Now.ID['tmpl_ba_c04'],
        depends_on_template_task: Now.ID['tmpl_ba_c01'],
        dependency_type: 'finish_to_start',
        active: true,
    },
})

export const tmpl_ba_dep_c05_c04 = Record({
    $id: Now.ID['tmpl_ba_dep_c05_c04'],
    table: 'x_2300649_hirefl_0_task_dependency',
    data: {
        dependency_level: 'template',
        template_task: Now.ID['tmpl_ba_c05'],
        depends_on_template_task: Now.ID['tmpl_ba_c04'],
        dependency_type: 'finish_to_start',
        active: true,
    },
})

export const tmpl_ba_dep_c06_c05 = Record({
    $id: Now.ID['tmpl_ba_dep_c06_c05'],
    table: 'x_2300649_hirefl_0_task_dependency',
    data: {
        dependency_level: 'template',
        template_task: Now.ID['tmpl_ba_c06'],
        depends_on_template_task: Now.ID['tmpl_ba_c05'],
        dependency_type: 'finish_to_start',
        active: true,
    },
})

export const tmpl_ba_dep_c08_c01 = Record({
    $id: Now.ID['tmpl_ba_dep_c08_c01'],
    table: 'x_2300649_hirefl_0_task_dependency',
    data: {
        dependency_level: 'template',
        template_task: Now.ID['tmpl_ba_c08'],
        depends_on_template_task: Now.ID['tmpl_ba_c01'],
        dependency_type: 'finish_to_start',
        active: true,
    },
})

export const tmpl_ba_dep_c09_c08 = Record({
    $id: Now.ID['tmpl_ba_dep_c09_c08'],
    table: 'x_2300649_hirefl_0_task_dependency',
    data: {
        dependency_level: 'template',
        template_task: Now.ID['tmpl_ba_c09'],
        depends_on_template_task: Now.ID['tmpl_ba_c08'],
        dependency_type: 'finish_to_start',
        active: true,
    },
})

export const tmpl_ba_dep_c10_c01 = Record({
    $id: Now.ID['tmpl_ba_dep_c10_c01'],
    table: 'x_2300649_hirefl_0_task_dependency',
    data: {
        dependency_level: 'template',
        template_task: Now.ID['tmpl_ba_c10'],
        depends_on_template_task: Now.ID['tmpl_ba_c01'],
        dependency_type: 'finish_to_start',
        active: true,
    },
})

export const tmpl_ba_dep_c12_c07 = Record({
    $id: Now.ID['tmpl_ba_dep_c12_c07'],
    table: 'x_2300649_hirefl_0_task_dependency',
    data: {
        dependency_level: 'template',
        template_task: Now.ID['tmpl_ba_c12'],
        depends_on_template_task: Now.ID['tmpl_ba_c07'],
        dependency_type: 'finish_to_start',
        active: true,
    },
})

export const tmpl_ba_dep_c12_c11 = Record({
    $id: Now.ID['tmpl_ba_dep_c12_c11'],
    table: 'x_2300649_hirefl_0_task_dependency',
    data: {
        dependency_level: 'template',
        template_task: Now.ID['tmpl_ba_c12'],
        depends_on_template_task: Now.ID['tmpl_ba_c11'],
        dependency_type: 'finish_to_start',
        active: true,
    },
})

export const tmpl_ba_dep_c14_c03 = Record({
    $id: Now.ID['tmpl_ba_dep_c14_c03'],
    table: 'x_2300649_hirefl_0_task_dependency',
    data: {
        dependency_level: 'template',
        template_task: Now.ID['tmpl_ba_c14'],
        depends_on_template_task: Now.ID['tmpl_ba_c03'],
        dependency_type: 'finish_to_start',
        active: true,
    },
})

export const tmpl_ba_dep_c15_c08 = Record({
    $id: Now.ID['tmpl_ba_dep_c15_c08'],
    table: 'x_2300649_hirefl_0_task_dependency',
    data: {
        dependency_level: 'template',
        template_task: Now.ID['tmpl_ba_c15'],
        depends_on_template_task: Now.ID['tmpl_ba_c08'],
        dependency_type: 'finish_to_start',
        active: true,
    },
})

export const tmpl_ba_dep_c18_c13 = Record({
    $id: Now.ID['tmpl_ba_dep_c18_c13'],
    table: 'x_2300649_hirefl_0_task_dependency',
    data: {
        dependency_level: 'template',
        template_task: Now.ID['tmpl_ba_c18'],
        depends_on_template_task: Now.ID['tmpl_ba_c13'],
        dependency_type: 'finish_to_start',
        active: true,
    },
})

export const tmpl_ba_dep_c20_c19 = Record({
    $id: Now.ID['tmpl_ba_dep_c20_c19'],
    table: 'x_2300649_hirefl_0_task_dependency',
    data: {
        dependency_level: 'template',
        template_task: Now.ID['tmpl_ba_c20'],
        depends_on_template_task: Now.ID['tmpl_ba_c19'],
        dependency_type: 'finish_to_start',
        active: true,
    },
})

export const tmpl_ba_dep_c21_c20 = Record({
    $id: Now.ID['tmpl_ba_dep_c21_c20'],
    table: 'x_2300649_hirefl_0_task_dependency',
    data: {
        dependency_level: 'template',
        template_task: Now.ID['tmpl_ba_c21'],
        depends_on_template_task: Now.ID['tmpl_ba_c20'],
        dependency_type: 'finish_to_start',
        active: true,
    },
})

export const tmpl_ba_dep_ba01_c08 = Record({
    $id: Now.ID['tmpl_ba_dep_ba01_c08'],
    table: 'x_2300649_hirefl_0_task_dependency',
    data: {
        dependency_level: 'template',
        template_task: Now.ID['tmpl_ba_ba01'],
        depends_on_template_task: Now.ID['tmpl_ba_c08'],
        dependency_type: 'finish_to_start',
        active: true,
    },
})

export const tmpl_ba_dep_ba02_c08 = Record({
    $id: Now.ID['tmpl_ba_dep_ba02_c08'],
    table: 'x_2300649_hirefl_0_task_dependency',
    data: {
        dependency_level: 'template',
        template_task: Now.ID['tmpl_ba_ba02'],
        depends_on_template_task: Now.ID['tmpl_ba_c08'],
        dependency_type: 'finish_to_start',
        active: true,
    },
})
