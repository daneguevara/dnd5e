import { buildSchema } from 'graphql';

export default buildSchema(`
  enum Class {
    BARD
    CLERIC
    DRUID
    PALADIN
    RANGER
    SORCERER
    WARLOCK
    WIZARD
  }

  enum School {
    ABJURATION
    CONJURATION
    DIVINATION
    ENCHANTMENT
    EVOCATION
    ILLUSION
    NECROMANCY
    TRANSMUTATION
  }

  enum Component {
    SOMATIC
    VERBAL
  }

  type Spell {
    castingTime: String
    classes: [Class]!
    components: [Component]!
    description: String
    duration: String!
    level: String!
    materialsNeeded: String
    name: String!
    range: String!
    ritual: Boolean!
    school: School!
    tags: [String]!
    type: String!
  }

  type Query {
    spells: [Spell]!
  }
`);
