import test from 'ava'
import obfuscate from '../src'

test((t) => {
  t.is(obfuscate('testing'), 't******')
  t.is(obfuscate('testing', { character: '%' }), 't%%%%%%')
  t.is(obfuscate('testing', { keep: 3 }), 'tes****')
  t.is(obfuscate('testing', { direction: 'right', keep: 5 }), '**sting')

  t.throws(() => obfuscate(1), TypeError)
  t.throws(() => obfuscate(), TypeError)
  t.throws(() => obfuscate('testing', { keep: '3' }), TypeError)
  t.throws(() => obfuscate('testing', { character: 1 }), TypeError)
  t.throws(() => obfuscate('testing', { direction: 'up' }), Error)
})
