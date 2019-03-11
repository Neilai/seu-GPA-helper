/**
 * Created by Neil
 * 2019-02-26 09:45
 */
chrome.runtime.onInstalled.addListener(
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: {hostEquals: 'xk.urp.seu.edu.cn'},
            })
            ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    })
)

