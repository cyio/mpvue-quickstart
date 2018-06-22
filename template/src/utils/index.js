const request = (url, method = 'GET') =>
	new Promise((resolve, reject) => {
		wx.request({
			url,
			method,
			success: res => resolve(res.data),
			fail: res => {
				wx.showToast({
					title: '请求失败',
					icon: 'none',
				})
				reject(res)
			},
		})
	})

export function formatTime{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}(date) {
  const year = date.getFullYear(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  const month = date.getMonth() + 1{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  const day = date.getDate(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

  const hour = date.getHours(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  const minute = date.getMinutes(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  const second = date.getSeconds(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

  const t1 = [year, month, day].map(formatNumber).join('/'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  const t2 = [hour, minute, second].map(formatNumber).join(':'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

  return `${t1} ${t2}`{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}

export default {
  formatNumber,
  formatTime{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
