import test from 'ava'
import coverup from '../src'

test((t) => {
  t.is(coverup('testing'), '*******')
  t.is(coverup('testing', { char: '%' }), '%%%%%%%')
  t.is(coverup('testing', { keepLeft: 3 }), 'tes****')
  t.is(coverup('testing', { keepRight: 3 }), '****ing')
  t.is(coverup('testing', { keepLeft: 1, keepRight: 1 }), 't*****g')
  t.is(coverup('testingtesting', { keepLeft: 1, keepRight: 1, compactTo: 3 }), 't***g')
  t.is(coverup('testingtesting', { keepLeft: 1, compactTo: 2 }), 't**')
  t.is(coverup('testingtesting', { keepLeft: 1, keepRight: 1, compactTo: 5 }), 't*****g')
  t.is(coverup('testing-test-testing'), '********************')
  t.is(coverup('testing-test-testing', { keepSymbols: true }), '*******-****-*******')
  t.is(coverup('4242-4242-4242-4242', { keepLeft: 4, keepRight: 4, keepSymbols: true }), '4242-****-****-4242')
  t.is(coverup(123), '***')
  t.is(coverup('testing', { keepLeft: '1' }), 't******')
  t.is(coverup('testing', { keepLeft: -1 }), '*******')
  t.is(coverup('test-test', { keepSymbols: '0' }), '****-****')
  t.is(coverup(''), '')
  t.is(coverup(), undefined)

  t.throws(() => coverup('testing', { compactTo: 2, keepSymbols: true }), Error)
})
