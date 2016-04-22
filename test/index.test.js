import test from 'ava'
import mask from '../src'

test((t) => {
  t.is(mask('testing'), '*******')
  t.is(mask('testing', { char: '%' }), '%%%%%%%')
  t.is(mask('testing', { keepLeft: 3 }), 'tes****')
  t.is(mask('testing', { keepRight: 3 }), '****ing')
  t.is(mask('testing', { keepLeft: 1, keepRight: 1 }), 't*****g')
  t.is(mask('testing-test-testing'), '********************')
  t.is(mask('testing-test-testing', { keepSymbols: true }), '*******-****-*******')
  t.is(mask('4242-4242-4242-4242', { keepLeft: 4, keepRight: 4, keepSymbols: true }), '4242-****-****-4242')
  t.is(mask(123), '***')
  t.is(mask('testing', { keepLeft: '1' }), 't******')
  t.is(mask('testing', { keepLeft: -1 }), '*******')
  t.is(mask('test-test', { keepSymbols: '0' }), '****-****')

  t.throws(() => mask(), Error)
})
