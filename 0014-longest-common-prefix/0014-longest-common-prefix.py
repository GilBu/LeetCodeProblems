class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        strs.sort(key=len)
        prefix = ''
        for char_idx in range(0,len(strs[0])):
            first_word = strs[0]
            for idx in range(1, len(strs)):
                if(first_word[char_idx] != strs[idx][char_idx]):
                    return prefix
            prefix = prefix + first_word[char_idx]
        
        return prefix