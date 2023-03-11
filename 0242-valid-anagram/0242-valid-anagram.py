class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        char_dic = {}
        for char in s:
            if char not in char_dic:
                char_dic[char] = 0
            char_dic[char] += 1
        
        for char in t:
            if char not in char_dic or char_dic.get(char) == 0:
                return False
            char_dic[char] -= 1
        return True