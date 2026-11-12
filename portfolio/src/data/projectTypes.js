// A project's "type" in projects.json must be one of these keys.
// The filter tab for a type only shows up once a project uses it.
const PROJECT_TYPES = {
  personal: { filter: 'Personal', card: 'Personal', detail: 'Personal project' },
  university: { filter: 'University', card: 'University · Team', detail: 'University · Team project' },
  game: { filter: 'Game dev', card: 'Game dev', detail: 'Game development' },
}

export default PROJECT_TYPES
