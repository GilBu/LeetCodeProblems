class Solution:
    def floodFill(self, image: List[List[int]], sr: int, sc: int, color: int) -> List[List[int]]:
        stack = [[sr, sc]]
        set = {f"{sr},{sc}"}
        dirs = [[1,0],[0,1],[-1,0],[0,-1]]
        replaceColor = image[sr][sc]
        
        while len(stack) > 0:
            r, c = stack.pop()
            
            for dir in dirs:
                newDir = [r + dir[0], c + dir[1]]
                if newDir[0] < 0 or newDir[0] >= len(image) or newDir[1] < 0 or newDir[1] >= len(image[0]):
                    continue
                print(newDir)
                if image[newDir[0]][newDir[1]] == replaceColor and f"{newDir[0]},{newDir[1]}" not in set:
                    stack.append(newDir)
                    set.add(f"{newDir[0]},{newDir[1]}")
            image[r][c] = color
            
        return image