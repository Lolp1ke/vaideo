from django.shortcuts import render

import cv2
import numpy as np
import matplotlib.pyplot as plt

def process_video(video_file, grid_size=(100, 100)):
    cap = cv2.VideoCapture(video_file)
    grid = np.zeros(grid_size)

    while cap.isOpened():
        ret, frame = cap.read()

        if not ret:
            break

        gray_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        yield gray_frame, grid

    cap.release()

def detect_customers(gray_frame):
    detector = cv2.SimpleBlobDetector_create()
    keypoints = detector.detect(gray_frame)
    return keypoints

def mark_positions(gray_frame, keypoints, grid):
    for keypoint in keypoints:
        x, y = keypoint.pt
        grid[int(y // grid.shape[0]), int(x // grid.shape[1])] += 1


def normalize_density_map(grid):
    max_value = np.max(grid)
    normalized_grid = grid / max_value
    return normalized_grid

def plot_heatmap(normalized_grid):
    plt.imshow(normalized_grid, cmap='hot', interpolation='nearest')
    plt.colorbar()
    plt.show()

def generate_heatmap(video_file, grid_size=(100, 100)):
    for gray_frame, grid in process_video(video_file, grid_size):
        keypoints = detect_customers(gray_frame)
        mark_positions(gray_frame, keypoints, grid)

    normalized_grid = normalize_density_map(grid)
    plot_heatmap(normalized_grid)

video_file = "path/to/your/video.mp4"
generate_heatmap(video_file)
