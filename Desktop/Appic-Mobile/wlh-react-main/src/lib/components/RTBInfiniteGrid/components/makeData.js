import namor from 'namor'

const range = len => {
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}

const newPerson = () => {
  const statusChance = Math.random()
  return {

    loan_app_id: Math.floor(Math.random() * 100),
    product: namor.generate({ words: 1, numbers: 0 }),
    entity_product: namor.generate({ words: 1, numbers: 0 }),
    hub_entity: namor.generate({ words: 1, numbers: 0 }),
    source_entity: namor.generate({ words: 1, numbers: 0 }),
    lending_entity: namor.generate({ words: 1, numbers: 0 }),
    primary_appl: namor.generate({ words: 1, numbers: 0 }),
    status:
      statusChance > 0.66
        ? 'relationship'
        : statusChance > 0.33
        ? 'complicated'
        : 'single',
  }
}

export default function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth]
    return range(len).map(d => {
      return {
        ...newPerson(),
        // subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      }
    })
  }

  return makeDataLevel()
}
