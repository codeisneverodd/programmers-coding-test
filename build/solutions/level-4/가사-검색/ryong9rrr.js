class Node {
  constructor(value = '') {
    this.value = value
    this.children = new Map()
    this.count = 0
  }
}

class Trie {
  constructor() {
    this.root = new Node()
  }

  insert(string) {
    let currentNode = this.root
    for (const char of string) {
      if (!currentNode.children.has(char)) {
        currentNode.children.set(char, new Node(currentNode.value + char))
      }
      currentNode = currentNode.children.get(char)
      currentNode.count++
    }
  }

  startsWithCount(prefix) {
    let currentNode = this.root
    for (const char of prefix) {
      if (!currentNode.children.has(char)) {
        return 0
      }
      currentNode = currentNode.children.get(char)
    }
    return currentNode.count
  }
}

function reverseString(string) {
  return [...string].reverse().join('')
}

function solution(words, queries) {
  const table = {}
  const reverseTable = {}
  const counter = {}

  words.forEach((word) => {
    const key = word.length
    if (!table[key]) table[key] = new Trie()
    if (!reverseTable[key]) reverseTable[key] = new Trie()
    table[key].insert(word)
    reverseTable[key].insert(reverseString(word))
    if (counter[key] === undefined) counter[key] = 0
    counter[key]++
  })

  return queries.map((query) => {
    const key = query.length
    if (!table[key]) {
      return 0
    }
    const tQuery = query.replace(/\?/g, '')
    if (!tQuery) {
      return counter[key]
    }
    if (query[query.length - 1] === '?') {
      return table[key].startsWithCount(tQuery)
    }
    return reverseTable[key].startsWithCount(reverseString(tQuery))
  })
}