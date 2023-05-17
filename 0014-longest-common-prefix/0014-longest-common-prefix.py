class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        strs = sorted(strs)
        prefix = ''
        first_word = strs[0]
        last_word = strs[-1]
        for char_idx in range(len(first_word)):
            if(first_word[char_idx] != last_word[char_idx]):
                return prefix
            prefix = prefix + first_word[char_idx]
        
        return prefix