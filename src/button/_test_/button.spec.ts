import button from '../index'

import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
// 测试分组
describe('Button', () => {
  // mount
  it('mount  @vue/test-utils', () => {
    // @vue/test-utils
    const wrapper = mount(button, {
      slots: {
        default: 'Button'
      }
    })

    // 断言
    expect(wrapper.text()).toBe('Button')
    expect(
      wrapper
        .classes()
        .map((v) => v.replace('\n', ''))
        .includes('bg-blue-500')
    ).toBe(true)
  })
})
// import { describe, expect, it } from "vitest";

// describe("two plus two is four", () => {
//     it("should be 4", () => {
//         expect(2 + 2).toBe(4)
//     })
// })
