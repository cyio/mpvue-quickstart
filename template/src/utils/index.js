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

export default request
