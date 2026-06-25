import type { ChangelogEntry } from './changelog.types'

export interface ChangelogGroup {
    versionLabel: string
    date: string
    notes: string[]
    footer?: string
}

const sameNotes = (a: ChangelogEntry, b: ChangelogEntry): boolean =>
    a.footer === b.footer &&
    a.notes.length === b.notes.length &&
    a.notes.every((line, i) => line === b.notes[i])

export function groupChangelog(entries: ChangelogEntry[]): ChangelogGroup[] {
    const groups: ChangelogGroup[] = []
    let i = 0

    while (i < entries.length) {
        const head = entries[i]
        let j = i + 1
        while (j < entries.length && sameNotes(entries[i], entries[j])) j++

        const tail = entries[j - 1]
        const versionLabel =
            head.version === tail.version
                ? head.version
                : `${tail.version} – ${head.version}`

        groups.push({
            versionLabel,
            date: head.date,
            notes: head.notes,
            footer: head.footer,
        })

        i = j
    }

    return groups
}
