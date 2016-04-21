import test from 'ava'
import mask from '../src'

test((t) => {
  t.is(mask('testing'), 't******')
  t.is(mask('testing', { keep: 3 }), 'tes****')
  t.is(mask('testing', { character: '%' }), 't%%%%%%')
  t.is(mask('testing-testing'), 't**************')
  t.is(mask('testing-testing', { alphanumeric: true }), 't******-*******')
  t.is(mask('testing', { direction: 'right' }), '******g')
  t.is(mask('testing-testing', { direction: 'right', alphanumeric: true }), '*******-******g')
  t.is(mask('4242-4242-4242-4242', { keep: 4 }), '4242***************')
  t.is(mask('4242-4242-4242-4242', { keep: 4, alphanumeric: true }), '4242-****-****-****')
  t.is(mask('4242-4242-4242-4242', { keep: 4, alphanumeric: true, direction: 'right' }), '****-****-****-4242')

  t.throws(() => mask(), Error)
  t.throws(() => mask('testing', { direction: 'up' }), Error)
})
