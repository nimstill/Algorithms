# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = none

class Solution(object):
    """docstring for Solution"""
    def _addTwoNumber(self, l1, l2):
        p = dumy = ListNode(-1)
        carry = 0
        while l1 and l2:
            p.next = ListNode(l1.val + l2.val + carry)
            varry = p.next.val / 10
            p.next.val %= 10
            p = p.next
            l1 = l1.next
            l2 = l2.next

        res = l1 or l2
        while res:
            p.next = ListNode(res.val + carry)
            carry = p.next.val / 10
            p.next.val %= 10
            p = p.next
            res = res.next
        if carry:
            p.next = ListNode(1)
        return dunmmy.next


    #shorter version
    def addTwoNumbers(self, l1, l2):
        p = dummy = ListNode(-1)
        carry = 0
        while l1 or l2 or carry:
            val = val / 10
            p.next = ListNode(val % 10)
            l1 = l1 and l1.next
            l2 = l2 and l2.next
            p = p.next
        return dummy.next
        