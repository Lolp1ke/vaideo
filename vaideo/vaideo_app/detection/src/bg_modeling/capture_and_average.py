import cv2
import os
import sys
import glob
import tqdm
import numpy as np

root = "data/mediadata/videos/"
dest_dir = "data/mediadata/ori_images/"
video_names = [str(i)+'.mp4' for i in range(1,101)]

print("caputure videos")
for video_name in tqdm.tqdm(video_names):
    file_name = video_name
    folder_name = dest_dir+file_name.split('.')[0]
    os.makedirs(folder_name,exist_ok=True)
    vc = cv2.VideoCapture(root+video_name)
    c = 1
    if vc.isOpened():  
        rval, frame = vc.read()
    else:
        rval = False

    timeF =1  

    while rval: 
        rval, frame = vc.read()
        if not rval:
            break
        pic_path = folder_name+'/'
        if (c % timeF == 0): 
            if frame is not None:
                cv2.imwrite(pic_path + str(c) + '.jpg', frame)  
            else:
                print("Frame is empty at frame:", c)
        c = c + 1
        cv2.waitKey(1)
    vc.release()

dest_dir_processed = "data/mediadata/processed_images/"
# ... (previous code)

print("average images")
for i in tqdm.tqdm(range(1, 101)):
    video_name = str(i)
    path_file_number = glob.glob(os.path.join(dest_dir, video_name, '*.jpg'))
    internal_frame = 4
    start_frame = 1
    video_name = str(i)
    nums_frames = len(path_file_number)
    alpha = 0.1
    os.makedirs(dest_dir_processed + video_name, exist_ok=True)

    for j in range(4, 5):
        internal_frame = 4 + j * 4
        num_pic = int(nums_frames / internal_frame)
        former_im_path = dest_dir_processed + "%d/1.jpg" % i
        img_path = os.path.join(root, video_name, str(start_frame) + '.jpg')

        if not os.path.exists(former_im_path) or not os.path.exists(img_path):
            print("Image paths not found:", former_im_path, img_path)
            continue

        former_im = cv2.imread(former_im_path)
        img = cv2.imread(img_path)

        if former_im is None or img is None:
            print("Images not found or empty:", former_im_path, img_path)
            continue

        for i in range(num_pic):
            now_im_path = os.path.join(root, video_name, str(i * internal_frame + start_frame) + '.jpg')
            now_im = cv2.imread(now_im_path)
            
            if now_im is None:
                print("Image not found or empty:", now_im_path)
                continue

            if np.mean(np.abs(now_im - former_im)) > 5:
                img = img * (1 - alpha) + now_im * alpha
                cv2.imwrite(dest_dir_processed + video_name + '/' + str(i * internal_frame + start_frame)
                            + '_' + str(j) + '.jpg', img)
            else:
                cv2.imwrite(dest_dir_processed + video_name + '/' + str(i * internal_frame + start_frame)
                            + '_' + str(j) + '.jpg', img * 0)
            former_im = now_im

